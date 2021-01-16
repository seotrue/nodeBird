
import { Button, Form, Input } from 'antd';
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';


import useInput from '../hooks/useInput';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const CommentForm = () => {
    // const [commentTxt,setCommentTxt] = useState('')
    const [commentText, onChangeCommentText, setCommentText] = useInput('');
    const dispatch = useDispatch();

    const id = useSelector((state) => state.user.me?.id)

    const { addCommentDone, addCommentLoading } = useSelector((state) => state.post);

    useEffect(() => {
        if (addCommentDone) {
            setCommentText('');
        }
    }, [addCommentDone]);

    const onSubmitComment = useCallback(()=>{
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, userId: id, postId: post.id },
        });
    }, [commentText, id]);

    // 커스텀 훅으로 변경
    // const onChangeCommentText = useCallback((e)=>{
    //     setCommentTxt(e.target.value)
    // },[])
    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position: 'relative', margin: 0 }}>
            <Input.TextArea row={4} value={commentText} onChange={onChangeCommentText}/>
                <Button style={{ position: 'absolute', right: 0, bottom: -40 }} type="primary" loading={addCommentLoading} htmlType="submit">삐약</Button>
            </Form.Item>
        </Form>
    );
};
CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm;