# node-bird
## next.js 역활
### 전통적인 방법
- 프론트 서버에서 백엔트 서버의 데이터를 받구 프론트에서 데이터를 가지구 화면과 함께 브라우저에게 전달
- 한번에 화면을 그려주지만 단점은 화면 그려주는 시간이 길어진다.
### 리액트 뷰 등 싱글페이지애플리케이션
- 데이터 없이 화면만 받구(프론트에서) 백엔드에서 직접 데이터를 받는다 브라우저에서
- 화면을 먼저 그려주고 로딩창을 띄어서 그동안 백엔드에서 데이터를 받아서 그려준다
- 앞으로 바뀔거에 대한 화면까지 받아오기 때문에 시간이 더 걸릴수 잇지만 먼저 화면에 그려주기때문에 
사용자 입장에선 더 좋을수도! 사용자가 빠르게 인터랙션이 필요할때 주로 사용
### 서버사이드 랜더링 :  검색을 위해서
1. 프리랜더 :  검색엔진이라구 미리 파악해서 구분해서 보내준다
2. 서버사이드 랜더링 : 첫방문만 전통적인 방식으로 하구 그다음 페이지 전환일때는 리액트 방식이으로
<br> 하이브리드 방식
=> 어드민페이지를 사용할때는 검색 엔진에 노출 안되두 되기에 굳이 서버사이드 렌더링 방식을 안해두 된다

## 준비사항
1. 넥스트 설치
> npm i next@9 // 버젼은 @로 

2. ant디자인 설치

3. eslint : 코드 규칙<br>
D는 개발모드
> npm i eslint -D 
<br>
> npm i eslint-plugin-import -D
<bt>
> npm i eslint-plugin-react -D
<Br>
> npm i eslint-plugin-hooks -D

<br>
설치 후  .eslintrc 파일을 만들어주고 해당 규칙을 기재해준다 <br>
그리고 eslint의 대한 에디터 설정두 해준다

## next.js의 특징
1. 넥스트는 라우팅을 알아서 해준다
- 동적 라이팅 기능이 추가되었다.


