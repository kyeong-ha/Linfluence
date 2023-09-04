import '@styles/Main/Header.scss';
import { ReactNode } from 'react';
// 페이지 최상단 + child 요소들이 flex + absolete 속성
export default function Header({ children } : { children: ReactNode[] }) {
    return (
        <>
        <header>
            <div className='contents'>
                {children}
            </div>
        </header>
        </>
    )
}