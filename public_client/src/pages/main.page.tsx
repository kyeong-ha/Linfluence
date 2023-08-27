import PageLayout from '@components/common/PageLayout';
import DesktopPage from "./main/main.desktop";
import MobilePage from "./main/main.mobile";

export function MainPage(){
    return (
        <>
        <PageLayout>
            <DesktopPage />
            <MobilePage />
        </PageLayout>
        </>
    );
}