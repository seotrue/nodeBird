import React,{useMemo} from  'react'
import {Form, Input} from "antd";
const NicknameEditForm = () =>{
    const style = useMemo(()=>({ marginBottom:'20px'}),[])
    return (
        <Form style={style}>
            <Input.Search addonBefore={'닉네임'} enterButton={"수정"}></Input.Search>
        </Form>
    )
}
export  default NicknameEditForm