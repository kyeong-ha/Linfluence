import styled from 'styled-components'

const BannerImg = styled.img`
    width: 100%;
    content: ${(src) => (src ? `url(${src})` : '')};
    position: absolute;
    top: 0;
    left: 0;
    z-index:1;
`;

export default function ProfileBanner({ src }: { src: string }) {
    return (
        <>
        <BannerImg src={src}/>
        </>
    )
}