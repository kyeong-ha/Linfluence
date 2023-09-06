// flex direction column, start + desc 스크롤에 따른 ts 커버링 
import { ReactNode } from 'react';
import styled from "styled-components";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
  > button { margin: 3%; margin-bottom: 0; }
  > p{
    margin: 0.5rem 3%;
  }
  #readmore {
    align-self: center;
    background-color: transparent;
  }
`;

export default function Profile({ children } : { children: ReactNode[] }) {
  return (
    <>
      <Contents>
        {children}
      </Contents>
    </>
  )
}