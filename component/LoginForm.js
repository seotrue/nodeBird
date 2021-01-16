import React, {useCallback, useMemo} from 'react';
import {Button, Form, Input} from 'antd'
import styled from "styled-components";
import Link from "next/link";

import {useDispatch, useSelector} from "react-redux";
import useinput from "../hook/useinput";

import { LOG_IN_REQUEST} from '../reducers/user';

// 스타일드 컴포넌트
const ButtonWrapper = styled.div`
    margin-top:10px
`;

const FormWrapper = styled(Form)`
    padding:10px
`

const LoginForm = () =>{
    // 액션을 디스패치
    const dispatch = useDispatch();
    const {logInLoading} = useSelector((state)=>state.user)
    const [email,onChangeId] = useinput('');
    const  [password,onChangePassword] = useinput('');

    const style = useMemo(()=>({  marginTop:'10px'}),[])


    const onSubmitForm = useCallback(()=>{
        dispatch({
            type: LOG_IN_REQUEST,
            data: { email, password },
        })
    } ,[email, password])

    // const style = useMemo({marginTop:'10px'},[])


    return(
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor={'user-id'}>아이디</label>
                <br/>
                <Input  name='user-id' value={email} onChange={onChangeId} requied/>
            </div>
            <div>
                <label htmlFor={'user-password'}>비밀번호</label>
                <Input
                    name={'user-password'}
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    requird
                />
            </div>
            <ButtonWrapper style={style}>
                <Button type={"primary"} htmlType={'submit'} loading={logInLoading}>로그인</Button>
                <Link href={'/signup'}><a>회원가입</a></Link>
            </ButtonWrapper>

        </FormWrapper>
    )
}

export default LoginForm