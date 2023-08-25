import { ReactNode } from 'react';
import { Desktop, Mobile } from "../utils/MediaQuery";

export default function PageLayout({ children }: { children: ReactNode[] }) {
    return (
        <main>
            <Desktop>
                {children[0]}
            </Desktop>
            <Mobile>
                {children[1]}
            </Mobile>
        </main>
    );
}