import React from 'react'
import AppLayout from "../component/AppLayout";
import Head from "next/head";
import NicknameEditForm from '../component/NicknameEditForm'
import FollowList from '../component/FollowList'

const Profile = ()  =>{
    const followingList = [{nickname:'제로초'},{nickname:'바보'}]
    const followerList = [{nickname:'제로초'},{nickname:'바보'}]

    return(
        <>
            <Head>
                <title>내프로필 </title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로잉 목록" data={followerList} />
            </AppLayout>

        </>
    )
}
export default Profile