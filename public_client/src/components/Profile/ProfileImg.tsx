import styled from 'styled-components'

const ProfileImage = styled.img`
  width: 70px;
  content: ${(src) => (src ? `url(${src})` : '')};
  border-radius: 50%;
  position: sticky;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

export default function ProfileImg({ src }: { src: string }) {
  return (
      <>
      <ProfileImage src={src}/>
      </>
  )
}