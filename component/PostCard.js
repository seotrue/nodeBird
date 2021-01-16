import React, {useCallback, useState} from 'react'
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import {useSelector} from "react-redux";
import Link from 'next/link';

import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import Image from "./Image";
import PostCardContent from "./PostCardContent";
import styled from 'styled-components';
import FollowButton from "./FollowButton";

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

const PostCard = ({post})  =>{
    const dispatch = useDispatch();
    const { removePostLoading } = useSelector((state)=>state.post)

    //const  {id} = useSelector(state=> state.user.me?.id)// 옵셔널 체이닝 연산자
    const id = useSelector((state) => state.user.me && state.user.me.id);
    const [liked, setLiked] = useState(false)
    const [commentFormOpened,setCommentFormOpened] = useState(false);

    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, []);

    const onToggleComment = useCallback(()=>{
        setCommentFormOpened((prev) => !prev)
    },[])

    const onRemovePost = useCallback(()=>{
        // 액션 함수로 만들어서 액션 함수 호출해두 되구 그냥 객체에 데이터 넣어서 보내두 되구
        dispatch({
            type:REMOVE_POST_REQUEST,
            data : post.id
        })
    },[])
    return(
        <CardWrapper>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} /> }
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="message" onClick={onToggleComment} />,
                    <Popover
                        key="ellipsis"
                        content={(
                            <Button.Group>
                                {id && post.User.id === id
                                    ? (
                                        <>
                                            <Button>수정</Button>
                                            <Button type="danger" loading={ removePostLoading } onClick={onRemovePost}>삭제</Button>
                                        </>
                                    )
                                    : <Button>신고</Button>}
                            </Button.Group>
                        )}
                    >
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                extra={<FollowButton post={post} />}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>} //post.User.nickname[0] 닉네임의 첫번째 글자
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content}/>}
                />
            </Card>
            {commentFormOpened && (
                <>
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments ? post.Comments.length : 0}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments || []}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={(
                                        <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                                            <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                                        </Link>
                                    )}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </>
            )}
    </CardWrapper>
    )
}

PostCard.propTypes = {
    post : PropTypes.shape({
        id:PropTypes.number,
        User : PropTypes.object,
        content : PropTypes.string,
        createAt : PropTypes.object,
        Comments :PropTypes.arrayOf(PropTypes.object),
        Images :PropTypes.arrayOf(PropTypes.object)
    })
}
export default PostCard