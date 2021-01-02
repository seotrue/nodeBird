import React, {useCallback, useMemo, useState} from 'react';
import {Button, Form, Input} from 'antd'
import styled from "styled-components";
import {Link} from "next/link";
import PropTypes from "prop-types";


// 스타일드 컴포넌트
const ButtonWrapper = styled.div`
    margin-top:10px
`;

const FormWrapper = styled(Form)`
    padding:10px
`

const LoginForm = ({setIsLoggedIn}) =>{
    const [id,setId] = useState('');
    const  [password,setPassword] = useState('');

    const style = useMemo(()=>({  marginTop:'10px'}),[])

    const onChangeId = useCallback((e)=>{
        setId(e.target.value)
    },[])
    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value)
    },[])
    const onSubmitForm = useCallback(()=>{
        console.log(id,password)
        setIsLoggedIn(true)
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
                <Button type={"primary"} htmlType={'submit'} loading={false}>
                    로그인
                </Button>
                <Link href={'/signup'}><a><Button/>회원가입</a></Link>
            </ButtonWrapper>
            <div></div>
        </FormWrapper>
    )
}
LoginForm.propTypes = {
    setIsLoggedIn : PropTypes.func.isRequired
}
export default LoginForm