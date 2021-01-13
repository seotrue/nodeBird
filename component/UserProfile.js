import React, {useCallback} from 'react'
import {Avatar, Button, Card} from "antd";

import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../reducers/user";


const UserProfile = ()=>{
    const {nickName} = useSelector(state=>state.user)
    const dispatch = useDispatch();
    const onLogOut = useCallback(()=>{
        dispatch(logoutAction(false))
    },[])
    return (
        <>
            <Card
                action={[
                    <div key={'twit'}>짹짹 <br/>0</div>,
                    <div key={'followings'}>팔로잉 <br/>0</div>,
                    <div key={'follower'}>팔로워<br/>0</div>
                ]}>
                <Card.Meta
                    aveter={<Avatar>sol</Avatar>}
                    title={nickName}
                />
            </Card>

            <Button onclick={onLogOut}>로그아웃 </Button>
        </>
    )
}


export default UserProfile