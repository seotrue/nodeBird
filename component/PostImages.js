import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import ImageZoon from "./ImageZoon";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";

const PostImages = ({images}) => {
    const [showZoon, setShowZoon] = useState(false)

    const onZoom = useCallback(()=>{
        setShowZoon(true)
    },[])

    const onClose = useCallback(()=>{
        setShowZoon(false)
    },[])

    // 이미지가 하나 있을때 2개 있을때 조건을 걸구 3개 이상이 되면 조건문에 안걸리고 리턴 로직으로 이동
    if(images.length === 1){
        return (
            <>
                <img role="presentation" src={images[0].src} alt={images[0].src}  onClick={onZoom} />
                { showZoon &&<ImageZoon />}
            </>
        )
    }
    if(images.length === 2){
        return (
            <>
                <img role="presentation" src={images[0].src} alt={images[0].src} style={{width:"50%"}} onClick={onZoom} />
                <img role="presentation" src={images[1].src} alt={images[1].src} style={{width:"50%"}} onClick={onZoom} />
                { showZoon && <ImageZoon />}
            </>
        )
    }
    return (
        <>
        <div>
            <img role="presentation" src={images[0].src} alt={images[0].src} style={{width:"50%"}} onClick={onZoom} />
            <div
                role="presentation"
                style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
                onClick={onZoom}
            >
                <PlusOutlined />
                <br />
                {images.length-1}개의 사진 더보기
            </div>
        </div>
        { showZoon &&
            <ImageZoon onClose={onClose} images={images}/>
        }
        </>
    );
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
    })).isRequired,
};

export default PostImages;