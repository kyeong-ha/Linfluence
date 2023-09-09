import styled from "styled-components";

const Nav = styled.span`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5em 5%;
    // background-color: #999;
`;

const NavComponents = styled.span`
    word-break: keep-all;
    margin-right: 1.5rem;
`

export default function ProfileNav() {
    return (
        <Nav id="profile-nav">
            <span>
                <NavComponents>게시물</NavComponents>
                <NavComponents>스토어</NavComponents>
                <NavComponents>커뮤니티</NavComponents>
            </span>
            <span>필터</span>
        </Nav>
    )
}