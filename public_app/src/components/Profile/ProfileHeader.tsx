import { ReactNode } from 'react';
import styled from 'styled-components'

const ProfileHead = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
`;

export default function Header({ children } : { children: ReactNode[] }) {
    return (
      <>
        <ProfileHead id="header">
            {children}
        </ProfileHead>
      </>
    )
}