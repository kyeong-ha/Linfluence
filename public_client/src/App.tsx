import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '@pages/Main'
import InfluencerPage from '@pages/Influencer';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:influencerId" element={<InfluencerPage />} />
        </Routes>
    );
}

export default App;