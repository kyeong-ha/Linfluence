import '../../styles/influencer/influencer.scss';

export default function ProfileHeader() {
    return (
        <header className='profile-header'>
            <div className='back-icon'>뒤로가기</div>
            <div className='profile-img-wrap'>
                <div className='profile-img'>  
                </div>
            </div>
            <div className='profile-contents-wrap'>
                <div className='profile-contents'>
                    <h2>인플루언서 이름</h2>
                    <p>소개글</p>
                    <div className='profile-nav wrapper'>
                        <div className='nav-button'>
                            <span>게시물</span>
                            <span>스토어</span>
                        </div>
                        <div>필터</div>
                    </div>
                </div>
            </div>
        </header>
    )
}