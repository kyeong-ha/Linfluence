import styled from 'styled-components'

const BannerImg = styled.img`
    width: 150%;
    content: ${(src) => (src ? `url(${src})` : '')};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index:1;

    mask-image: linear-gradient(
        to bottom, #000 0%, transparent 80%, transparent 100%
    );
    -webkit-mask-image: linear-gradient(
        to bottom, #000 0%, #000 40%, transparent 80%, transparent 100%
    );
`;

export default function ProfileBanner({ src }: { src: string }) {
    return (
        <>
        <BannerImg src={src}/>
        </>
    )
}