import PageLayout from '../components/PageLayout';
import DesktopPage from "./influencer/influencer.desktop";
import MobilePage from "./influencer/influencer.mobile";
import { Route } from 'react-router-dom';

export function InfluencerPage(){
    return (
        <>
        <PageLayout>
            <DesktopPage />
            <MobilePage />
        </PageLayout>
        </>
    );
}