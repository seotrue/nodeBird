import React, {useCallback, useState} from 'react'
import AppLayout from "../component/AppLayout";
import Head from "next/head";
import {Button, Checkbox, Form, Input} from 'antd';
import styled from 'styled-components'
import useInput from "../hook/useinput";

const ErrorMessage = styled.div`
    color:red
`;
const Signup = ()  =>{
    const [id, onChangeId] = useInput('')
    const [nickname,onChangeNickname] =useInput('')
    const [password,onChangePassword] = useInput('')
    const [passwordCheck,setPasswordCheck] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [term,setTerm] = useState('')
    const [termError,setTermError] = useState(false)

    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password )
    },[password]);

    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false)
    },[password]);

    const onSubmit = useCallback(()=>{
        if(password !== passwordCheck){
            return setPasswordCheck(true)
        }
        if (!term){
            return setTermError(true)
        }
    },[password,passwordCheck,term])
    return(
        <AppLayout>
            <Head>
                <title>회원가입</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input htmlFor="user-id" value={id} requied onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input htmlFor="user-nick" value={nickname} requied onChange={onChangeNickname}/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input type="password" htmlFor="user-password" value={password} requied onChange={onChangePassword}/>
                </div>
                <div>
                    <label type="password" htmlFor="user-passwordCheck">비밀번호확인</label>
                    <br/>
                    <Input htmlFor="user-passwordCheck" value={passwordCheck} requied onChange={onChangePasswordCheck}/>
                   { passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name={'user-term'} checked={term} onChange={onChangeTerm}>약관에 동의 합니다</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>
                <div>
                    <Button type={'primary'} htmlType={'submit'}>가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    )
}
export default Signup