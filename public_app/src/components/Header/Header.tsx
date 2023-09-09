import { ReactNode } from 'react';
import styled from 'styled-components'
// 페이지 최상단 + child 요소들이 flex + absolete 속성

const Head = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    position: fixed;
`;

export default function Header({ children } : { children: ReactNode[] }) {
    return (
        <>
        <Head id="header">
            {children}
        </Head>
        </>
    )
}