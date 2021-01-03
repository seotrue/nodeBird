import React from 'react'
import AppLayout from '../component/AppLayout'
import {useSelector} from "react-redux";
const Home = ()  =>{
    const { isLoggedIn } = useSelector(state=>state.user)
    return(
        <AppLayout>
            <div>Hollow</div>
        </AppLayout>
    )
}
export default Home