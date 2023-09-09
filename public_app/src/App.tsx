import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '@pages/Main'
import InfluencerPage from '@pages/Influencer';
import useTheme from "@hooks/useTheme";
import { LightTheme } from "@styles/Theme/LightTheme";
import { DarkTheme } from "@styles/Theme/DarkTheme";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from "@styles/GlobalStyle";

const defaultValue = {
    theme: "light",
    onChangeTheme: () => {},
};

export const CustomThemeContext = React.createContext(defaultValue);

function App() {
    const themeProps = useTheme();

    return (
        <CustomThemeContext.Provider value={ themeProps }>
            <ThemeProvider theme={ themeProps.theme === "light" ? LightTheme : LightTheme }>
                <GlobalStyle />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/:influencerId" element={<InfluencerPage />} />
                </Routes>
                
            </ThemeProvider>
        </CustomThemeContext.Provider>
    );
}

export default App;