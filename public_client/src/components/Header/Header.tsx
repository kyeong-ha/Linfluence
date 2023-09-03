import '@styles/Main/Header.scss';

export default function Header() {
    return (
        <>
        <header className='header'>
            <div className='contents'>
                <div>로고</div>
                <div className='search-bar'>검색바</div>
                <div className='buttons-wrap'>
                    <div>검색</div>
                    <div>+</div>
                </div>
            </div>
        </header>
        </>
    )
}