import React, {useCallback, useEffect, useState} from 'react'
import {Form,Input,Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import addPost from "../reducers/poster";

const PostForm = ()  =>{
    const {imagePaths, addPostLoading,addPostDone} = useSelector((state)=>state.poster)
    const [text,setText] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        // 만약 추가 완료 true 면 텍스트를 초기화
        if(addPostDone){
            setText('')
        }
    },[addPostDone])

    const onSubmit = useCallback(()=>{
        // dispatch({
        //     type : ADD_POST_REQUEST,
        //     data :{
        //         text,
        //     }
        // })

        dispatch(addPost(text))
    },[])

    const onChangeText = useCallback((e)=>{
        setText(e.target.value)
    },[])

    return(
        <Form onFinish={onSubmit}>
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                MaxLength={140}
                placeholder={"어떤 신기한 일이 있어나요?"}
            />
            <div>
                <input type={'file'} multiple hidden />
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType={'submit'} loading={addPostLoading}>짹짹</Button>
            </div>
            <div>
                {imagePaths.map((v)=>{
                    return(
                        <div key={v} style={{ display: 'inline-block' }}>
                            <img src={'http://localhost:3065/' + v} style={{ width: '200px' }} alt={v} />
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Form>
    )
}
export default PostForm