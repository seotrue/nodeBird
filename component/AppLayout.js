import React from 'react'
import  PropTypes from 'prop-types';
import Link from 'next/link';
const AppLayout =({children}) => {
    return(
        <div>
            <div>
                {/*넥스트에선 따로 라우팅 설정이 필요없다 => 라우팅을 제공하기 때문에*/}
                <Link href="/"><a>노드버드</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="/siginup"><a>회원가입</a></Link>
            </div>
            {/*appLayou으로 감싸준 컴포넌트들이 children 부분에 불러짐*/}
            {children}
        </div>
    )
};

AppLayout.propTypes = {
    children : PropTypes.node.isRequired
}
export default AppLayout