1. Node.js
Node.js는 React.js의 기본이 되는 JavaScript 구동기이다.(RunTime)

- 버전확인 : 명령프롬포트 실행
node -v 입력

2. npm(Node Package Manager)
- 버전확인 : 명령프롬포트 실행
npm -v 입력

3. 프로젝트
: 특정 목적을 갖는 프로그램의 단위
※ Nodejs에서는 패키지라는 단위로 부른다.(쇼핑몰 패키지, 웹 포털 패키지 등등)

4. 모듈
: 기능별로 나뉘어진 각각의 자바스크립트 파일
    (1) 모듈 시스템
        : 모듈을 다루는 다양한 기능을 제공하는 시스템
        1) CommonJs 모듈(CJS)
            : export와 require를 사용
        2) ES 모듈(ESM)
            : CommonJs보다 최신식으로 작용
            package.json에 "type":"module" 추가해줘야함

5. 라이브러리
: 프로그램을 개발할 때 필요한 기능들을 미리 만들어 모듈화 해둔 것