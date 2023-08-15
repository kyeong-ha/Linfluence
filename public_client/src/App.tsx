import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main.page';
import { InfluencerPage } from './pages/influencer.page';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:name" element={<InfluencerPage />} />
        </Routes>
    );
}

export default App;