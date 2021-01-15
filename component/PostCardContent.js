import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

// 해시태그 링크 걸기
const PostCardContent = ({postData}) => {
    console.log(postData)
    return (
        <div>
            { postData.split(/(#[^\s#]+)/g).map((v,i)=>{
                return(
                    <Link href={`/hash/${v.slice(1)}`} key={i}><a>{v}</a></Link> //v.slice(1)= #을 제외한 단어
                )
            })

            }
        </div>
    );
};

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired,
};

export default PostCardContent;