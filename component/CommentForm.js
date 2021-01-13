import React, {useCallback, useState} from 'react';
import { Button, Form, Input } from 'antd';

const CommentForm = () => {
    const [commentTxt,setCommentTxt] = useState('')

    const onSubmitComment = useCallback(()=>{

    },[]);

    const onChangeCommentText = useCallback((e)=>{
        setCommentTxt(e.target.value)
    },[])
    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position: 'relative', margin: 0 }}>
            <Input.TextArea row={4} value={commentTxt} onChange={onChangeCommentText}/>
                <Button style={{ position: 'absolute', right: 0, bottom: -40 }} type="primary" htmlType="submit">삐약</Button>
            </Form.Item>
        </Form>
    );
};

export default CommentForm;