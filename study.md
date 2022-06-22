### 알게 된점
- <input> 태그의 required 속성은 폼 데이터(form data)가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드를 명시합니다.

## useEffect
- 두번째 인자 ->[], 
빈배열이면 componentDidMount 와 동일  //배열의 요소가 있으면 componentDidMount 랑  componentUpdate 둘다 수행

##useCallback
- 함수 그자체를 기억한다.
- 함수 컴포넌트가 재실행되두 useCallback안에 함수를 넣어서 다시 만들어지지 않도록 넣어준다
- state 사용시 두번째 인자에두 넣어준다
- 두번째 인자 ->[],
빈배열에 적어둔 얘가 바뀌면 새로 실행된다.
- 필수로 적용해야 할 때 : 자식 컴포넌트에 prpos 에 함수를 넘길때는 무조건 useCallback을 해줘야 한다 => 이유는 안할 경우 자식이 인식하기를 함수가 재실행될때마다 어라? 부모가 새로운프랍스를 전달하네? 라고 느끼면서 자식두 리렌더링 되기때문에
=> 너무 기억력이 강하면 바꿔야할 state 값도 기억 되기 때문에 두번째 인자에 넣어준다
### 나의정리
- useCallback은 함수컴포넌트가  계속 재실행 되니깐 불필요한 리렌더링을 막기 위해 사용한다.
즉  한번만 실행된다 이안에 적은 소스는
단 두번째 인자에 적은 값이 바뀔때면 useCallback 또한 다시 실행된다.

##useMemo
- 값이 다시 실행 되지 않고 캐싱(기억)하기
- 복잡한 함수 결과 값을 기억
- 두번째 인자가 바뀌지 않는 한 다시 실행되지 않는다
=> 함수를 사용할때  그안에 콘솔로 찍어서 내가필요할때 실행되는게 맞는지 확인
## useRdf 
- 일반 값을 기억

## hook
- 함수 컴포넌트 이기때문에 함수부분이 다시 실행된다 
- 순서가 매우 중요 => 선언해 주는 순서 

## 리덕스
- 데이터를 바뀌고 위해서 액션이 필요
- 액션을 디스패치 하는 순간 중앙 저장소가 변경
- reducer : 리듀서를 통해 어떤식으로 바뀌는지 리두셔에 기재
- 액션이 디스패치 한다구 자동으로 중앙 저장소가 바뀌는게 아니라 리듀서에서 구현을 해줘야 바뀐다
- 리듀서에 적어준 방식으로 따라서 스테이트? 저장소가 바뀐다
- 액션을 쭉 보면 내가 데이터를 어떤식으로 변화 하는지 파악이 가능해서 디버깅이 편함
- 불변성 => switch 문에서 리턴시{}로 하는데 그이유는 객체를 새로 만들어준다
=>>> 변경내역이 추적하기 쉽다
- ... state해주는 이유는 바뀌지 않는 애들은 참고 관계해주고 바뀐부분 새로 객체로 반환하면 메모리를 아낀다
- {} === {} // false
-... 하면 참조 된다 
- <img src="./리덕스의 참조 관계 및 정의.PNG width="700" height="370">
- <img src="./비구조할당의 불변성.PNG width="700" height="370">

## hooks 의 리더스 
1. const dispatch = useDispatch();  // 디스 패치 할때
dispatch(loginAction(false))  // 디스패치에 액션으 담아서

2. const isLoggedIn =useSelector((state)=>{state.user.isLoggedIn})  // //state.user.isLoggedIn은 중앙 저장소에 잇는 데이터
=> 중앙 저장소에서 받아올뗀 useSelector 사용
## git rebase -i를 해보기 위해 해당 줄 삽입

#
    /*
    커스텀 훅
    중복 되는 부분을 커스텀 훅으로 만드다.
    */
    import {useCallback, useState} from 'react'
    
    export default(initialValue = null)=>{
        const [value,setValue] = useState(initialValue)
        const handler = useCallback((e) => {
                setValue(e.target.value)
            },[input])
            return [value,handler]
    }
    
    #// 컴포넌트에 프랍스로 넘겨주는 함수는 useCallback을 써라

## 컴포넌트 구성 시
1. 일단 컴포넌트를 나눠준다
2. 해당 컴포넌트는 만들어준다   
## anted
1. card 사용시
엔티드에서 카드의 기능중 cover :  이미지 커버
액션 :  버튼과 해당 기능을 넣어줌
배열안에 jsx 넣을려면 key를 넣어줘야한다.
2. Card.meta  :  게시글 부분 
## propType 작성시
1. object 의 경우 shape()으로 구체적으로 작성 가능

## 옵셔널 체이닝 연사자
me?.id me가 잇으면id 리턴 없으면 언디파인
기존 me && id

## form
- 리액트 폼, 리액트 훅스 폼, 리덕스 폼 등 라이브러리를 이용해보기
=> 반복된다 지겹도록 그럼 줄이는 방법

-포로타입은 점겅도구는 귀찮아두 잘하자! 그래야 서비스가 안정화 


## createGlobalStyle  글로벌 스타일드
- 제공 되어지는 자동 클래스명이 붙은 애들을 커스텀하게 디자인 해줄수 있다  
 ```
    mport { CloseOutlined } from '@ant-design/icons';
    
    const Global = createGlobalStyle`
      .slick-slide {
        display: inline-block;
      }
      .ant-card-cover {
        transform: none !important;
      }
    `
    <Global/> // 아무곳에서 사용가능
```

### 정규표현식
- 해시태그 찾는 정규표현식 => /(#[^\s#]+)/g)
g 글로버

. 한글자

.. 두글자

+모든글자

[] 여기 안아ㅔ 적은것들중에 선택

[^여기안에 들어간 것은 제외]

\s 공백

\#[^\s#]+/g =># 뒤에 잇는 글자 공백과 다음 #전까지 찾는 정규표현

### 진행 과정
댓글 입력(디스패치) (액션함수면 불럿다가 액션 객체리턴 )

디스패치 할때 해당 데이터를 type의 액션 객체의 명에 올려주구 

->사가에서 디스패치 된 데이터를 받구 액션의 데이터 넣어주구

->

리두서 가서 해당 데이터의 값에 넣어준다

### next.js
- pages  폴더안에 파일들 개별적인 페이지로 만들(코드 스플릿팅)해줌: 라우팅을 따로 해줄 필요 없이 해당 폴더에 파일을 넣어준다

####서버사이드 랜더링 사용하기 위해 넥스트 사용하기
1. 서버사이드 메소드
- getInitialProps: next 예전버전

// 화면을 그리기전에 서버쪽에서 먼저 실행
//매개 변수에 context 전달
// 프론트 서버 -> 백서버 요청 
```
export const getServerSideProps = wrapper.getServerSideProps((context)=>{
//리덕스가 데이터가 채워진 상태로 렌더링 된다
context.store.dispatch({
        type:
    })
})_
````

