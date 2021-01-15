import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Slick from 'react-slick'
import styled, { createGlobalStyle } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

const Global = createGlobalStyle`
  .slick-slide {
    display: inline-block;
  }
  .ant-card-cover {
    transform: none !important;
  }
`

export const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  height: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;
  
  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;

export const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;

export const CloseBtn = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;

export const Indicator = styled.div`
  text-align: center;
  
  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

export const ImgWrapper = styled.div`
  padding: 32px;
  text-align: center;
  
  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

const ImageZoon = ({onClose, images}) => {
    // 현재 보여지는 이미지의 인덱스 값
    const [currentSlide,setCurrentSlide] = useState(0)
    console.log(images,'이미지존')
    return (
        <Overlay>
            <Global />
            <header>
                <h1>상세 이미지</h1>
                <button onClick={onClose}>x</button>
            </header>
            <div>
                <div>
                    <Slick
                        initalSlide={0}
                        afterChange={(slide)=>setCurrentSlide(slide)}
                        infinit
                        arrows={false}
                        slideToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map(v => {
                            return (
                                <ImgWrapper key={v.src}>
                                    <img src={v.src} alt={v.src}/>
                                </ImgWrapper>
                            )
                        })}
                    </Slick>
                </div>
                <div>
                    {currentSlide +1}{' '} / {images.length}
                </div>
            </div>
        </Overlay>
    );
};

ImageZoon.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
    })).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImageZoon;