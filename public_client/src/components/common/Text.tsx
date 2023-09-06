import React from "react";
import styled from "styled-components";

interface TextProps {
  size?: string
  value?: string
  weight?: string
}

const Txt = styled.p<TextProps>`
  font-size: ${(props) => (props.size ? `${props.size}` : '1rem')};
  font-weight: ${(props) => (props.weight ? `${props.weight}` : 'normal')};
  white-space: pre-line;
`;

const Text = (props: TextProps) => {
  return <Txt size={props.size} weight={props.weight}>
    {props.value ? `${props.value}` : ''}
  </Txt>;
}

export default Text;