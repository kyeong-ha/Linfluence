import colors from '../../types/Constants/colors';
import Header from '@components/Header/Header';
import '@styles/Main/Main.scss'
import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage(){
    const hotInfluencerId = 'Bellyvely';

    return (
        <>
            <Header>
                <span>로고</span>
                <span className='search-bar'>검색바</span>
                <span className='buttons-wrap'>
                    <div>검색</div>
                    <div>+</div>
                </span>
            </Header>
            <div className='container'>
                <img className='center-image'/>
                <div className='category'>
                    <nav className='nav-wrap'>
                        <ul className='nav'>
                            <li>전자기기</li>
                            <li>의류/잡화</li>
                            <li>생활용품</li>
                            <li>애완용품</li>
                            <li>주방용품</li>
                            <li>가구</li>
                            <li>뷰티용품</li>
                            <li>맛집</li>
                        </ul>
                    </nav>
                    
                    {/* '인기'의 선별기준? */}
                    <section className='hot-influ section'>
                        <h3>인기 인플루언서</h3>
                        <div className='slide-wrap'>
                            <Link to='/BilliRecords' className='influ-wrap'>
                                <div className='icon'>
                                    <img src=''/>
                                </div>
                                    <div className='influ-name'>빌리 레코즈</div>
                            </Link>
                            <Link to={hotInfluencerId} className='influ-wrap'>
                                <div className='icon'>
                                    <img src=''/>
                                </div>
                                <div>배배자매</div>
                            </Link>
                            <Link to='/backjongwon' className='influ-wrap'>
                                <div className='icon'>
                                    <img src=''/>
                                </div>
                                <div>백종원</div>
                            </Link>
                            <div className='influ-wrap'>
                                <div className='icon'>
                                    <img src=''/>
                                </div>
                                <div>코스모지나</div>
                            </div>
                        </div>
                    </section>

                    <section className='hot-post section'>
                        <h3>인기 게시물</h3>
                        <div className='slide-wrap'>
                            <div className='post-wrap'>
                                <div className='thumnail'>
                                    <img src=''/>
                                </div>
                                <div>누워서 듣기 좋은 음악 편안하고 산뜻한 R&B 1시간 | Lazy</div>
                            </div>
                            <div className='post-wrap'>
                                <div className='thumnail'>
                                    <img src=''/>
                                </div>
                                <div>누워서 듣기 좋은 음악 편안하고 산뜻한 R&B 1시간 | Lazy</div>
                            </div>
                        </div>
                    </section>

                    <section className='hot-product section'>
                        <h3>인기 제품</h3>
                        <div className='slide-wrap'>
                            <div className='product-wrap'>
                                <div className='thumnail'>
                                    <img src=''/>
                                </div>
                            </div>
                            <div className='product-wrap'>
                                <div className='thumnail'>
                                    <img src=''/>
                                </div>
                            </div>
                            <div className='product-wrap'>
                                <div className='thumnail'>
                                    <img src=''/>
                                </div>
                            </div>
                            <div className='product-wrap'>
                                <div className='thumnail'>
                                    <img src=''/>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='event section'>
                        <h3>이벤트</h3>
                    </section>
                </div>
            </div>

        </>
    );
}