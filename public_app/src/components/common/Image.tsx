import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  content: ${(src) => (src ? `url(${src})` : '')};
`;

const Image = ({ src }: { src: string }) => {
  return <Img src={src}></Img>;
}

export default Image;