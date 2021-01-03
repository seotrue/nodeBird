import React  from 'react'
import  PropTypes from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd';
import {useSelector} from "react-redux";

import UserProfile from './UserProfile'
import LoginForm from './LoginForm'


const AppLayout =({children}) => {
    // 일부 페이지들의 공통적인 부분을 여기서 해결
    // isLoggedIn 값이 바뀌면 appLayout 애들이 알아서 리랜더링
    //state.user.isLoggedIn은 중앙 저장소에 잇는 데이터
    const { isLoggedIn } = useSelector(state => state.user.isLoggedIn);
    return(
        <div>
            <Menu mode={'horizontal'}>
                {/*넥스트에선 따로 라우팅 설정이 필요없다 => 라우팅을 제공하기 때문에*/}
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                 </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{verticalAlign:'middle'}}/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/siginup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} xd={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} xd={12} >
                {children}
                </Col>
                <Col xs={24} xd={6}>
                    오른쪽메뉴
                    <a href="http://s77711155.dothome.co.kr/front/index.html" target='_blank' rel='noreferrer noopener'>Made by sol</a>
                </Col>
            </Row>
            {/*appLayou으로 감싸준 컴포넌트들이 children 부분에 불러짐*/}

        </div>
    )
};

AppLayout.propTypes = {
    children : PropTypes.node.isRequired
}
export default AppLayout