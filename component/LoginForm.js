import React, {useCallback, useMemo} from 'react';
import {Button, Form, Input} from 'antd'
import styled from "styled-components";
import Link from "next/link";

import {useDispatch} from "react-redux";
import {loginAction} from "../reducers/user";
import useinput from "../hook/useinput";


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
    const [id,onChangeId] = useinput('');
    const  [password,onChangePassword] = useinput('');

    const style = useMemo(()=>({  marginTop:'10px'}),[])


    const onSubmitForm = useCallback(()=>{
        console.log(id,password)
        dispatch(loginAction({
            id,
            password,
        }))
    } ,[id, password])

    // const style = useMemo({marginTop:'10px'},[])


    return(
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor={'user-id'}>아이디</label>
                <br/>
                <Input  name='user-id' value={id} onChange={onChangeId} requied/>
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
                <Button type={"primary"} htmlType={'submit'} loading={false}>로그인</Button>
                <Link href={'/signup'}><a>회원가입</a></Link>
            </ButtonWrapper>

        </FormWrapper>
    )
}

export default LoginForm