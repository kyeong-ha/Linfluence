import  { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { IInfluencer, Influencer } from '../types/influencer.type';
import create from 'zustand';


interface IdState {
    id: Influencer;
    setId:(by: string) => void;
}

const IdStore = create<IdState>()((set) => ({
    id: new Influencer(),
    setId: (by: any) => set((state: any) => ({ ...state })),
}));

export default function useInfluencer(){
    const { influencerId } = useParams<{ influencerId: string }>();
    // const [influencer, setInfluencer] = useContext(new Influencer());
    const { id, setId } = IdStore();
    
    async function onChangeId(){
        if(influencerId !== id.influencerId){
            await axios.get(`/api/influencer/${influencerId}`)
            .then((res) => setId(res.data));
        }
    };

    useEffect(() => {
        onChangeId();
    }, []);

    return id;
}
