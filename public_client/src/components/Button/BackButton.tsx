import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Back = styled.button`
  font-size: 1.7rem;
  z-index: 2;
  text-align: left;
  width: fit-content;
  background-color: transparent;
`;

export default function BackButton() {
  const navigate = useNavigate();

  return (
      <Back onClick={() => { navigate(-1); }}>&#60;</Back>
  )
}