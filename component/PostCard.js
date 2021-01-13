import React from 'react'
import { Card, Button, Avatar, Comment } from 'antd';
import { RetweetOutlined,  HeartOutlined, MessageOutlined,  } from '@ant-design/icons';
import {useSelector} from "react-redux";
import PropTypes from 'prop-types';

import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import Image from "./Image";


const PostCard = ({post})  =>{
    const  {id} = useSelector(state=> state.user.me?.id)// 옵셔널 체이닝 연산자

    return(
        <Card
            cover={post.Images[0] && <PostImages images={post.Images} /> }
            action={[ // 각각의 버튼들 카드 안에 있는
                <RetweetOutlined key="retweet"/>,
                <HeartOutlined key={"heart"} />,
                <MessageOutlined key={"messege"}/>,
              //   <Popover key={'more'} constent={(
              //       // <ButtonGroup>
              //       // {id && post.User.id === id ?
              //       //     <>
              //       //     <Button>수정</Button>
              //       //     <Button type={'danger'}>삭제</Button>
              //       //     </>
              //       //     :
              //       //     <Button>신고</Button>
              //       //
              //       // }
              //       // </ButtonGroup>
              // //  )}>
              //       <EllipsisOutlined/>
              //   </Popover>

            ]}

        >   <Image/>

            <Button></Button>
            <Card.Meta
                avatar={<Avatar></Avatar>}
            />
            <CommentForm />
            <Comment />
        </Card>
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