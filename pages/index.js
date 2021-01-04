import React from 'react'
import AppLayout from '../component/AppLayout'
import {useSelector} from "react-redux";
import PostForm from '../component/PostForm'
import PostCard from '../component/PostCard'

const Home = ()  =>{
    const {isLoggedIn} = useSelector(state=>state.user)
    const {mainPosts} = useSelector(state=>state.post)
    return(
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((c)=>{
                return(
                    <PostCard key={c.id} post={c} />
                )
            })}
        </AppLayout>
    )
}
export default Home