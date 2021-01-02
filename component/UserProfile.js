import React, {useCallback} from 'react'
import {Avatar, Button, Card} from "antd";
import PropTypes from "prop-types";


const UserProfile = ({setIsLoggedIn})=>{
    const onLogOut = useCallback(()=>{
        setIsLoggedIn(false)
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
                aveter={<Avatar>Sol</Avatar>}
                title='sol'
            />
        </Card>

        <Button onclick={onLogOut}>로그아웃 </Button>
        </>
    )
}

UserProfile.propTypes = {
    setIsLoggedIn : PropTypes.node.isRequired
}
export default UserProfile