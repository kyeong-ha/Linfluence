import '../../styles/influencer.scss';

export default function ProfileHeader() {
    return (
        <header className='profile-header'>
            <div className='back-icon'>뒤로가기</div>

            <div className='profile-contents'>
                <div className='profile-img'></div>
                <div>인플루언서 이름</div>
                <div>소개글</div>
                <div className='profile-nav wrapper'>하단 nav</div>
            </div>
        </header>
    )
}