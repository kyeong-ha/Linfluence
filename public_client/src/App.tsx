import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main.page';
import { InfluencerPage } from './pages/influencer.page';

// import { MainDesktop } from './pages/MainPage/MainDesktop';
// import { MainTablet } from './pages/MainPage/MainTablet';
function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:userId" element={<InfluencerPage />} />
        </Routes>
    );
}

export default App;