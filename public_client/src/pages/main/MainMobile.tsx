import colors from '../../_lib/colors';
import { Mobile } from "../../hooks/MediaQuery";
import React from 'react';
import Header from '../../components/headers/Header';

export function MainMobile(){
    return (
        <>
        <Mobile>
            <Header />
            <h3>Mobile</h3>
        </Mobile>
        </>
    );
}