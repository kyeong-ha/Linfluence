import  React from 'react';
import { useParams, Link } from "react-router-dom";

export default function NotFoundErrorPage(){
    return ( 
    <>
        <header className='profile-header'>
            <div className='vertical-segment'>
                <Link to='/' className='back-icon'>
                    뒤로가기
                </Link>
                미존재 데이터 커버하는 페이지
            </div>
        </header>

        </>
    );
}