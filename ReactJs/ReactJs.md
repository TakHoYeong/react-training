※ React.js란?
:대규모 웹 서비스의 UI를 좀 더 편리하게 개발하기 위해 만들어진 기술

※ 컴포넌트(구성요소)
:화면 및 UI를 구성하는 요소

※ 특징

1.  컴포넌트를 기반으로 UI를 표현
2.  화면 업데이트 구현이 쉽다.
    (1)식당에서 주문하는 것과 비슷하게 선언형 프로그래밍 방식으로 코드가 간결하다.
    javascript는 명령형 프로그래밍 방식
    (2) 컴포넌트가 가진 State에 따라 UI를 렌더링할 수 있다

3.  화면 업데이트 처리가 빠르다.
    (1) 브라우저 렌더링(Critical Rendering Path) 과정 1) HTML, CSS를 각각 DOM, CSSOM으로 변형
    -> Render Tree에서 합침(청사진 느낌)
    -> Layout작업(요소의 배치를 정하는 작업)
    -> Painting(실제로 화면에 그림) 2) 화면업데이트는 어떻게 이루어지나?
    JavaScript가 DOM을 수정하면서 업데이트를 한다.
    이후 Render Tree ~ Painting까지의 과정을 Reflow(Layout) 및 Repaint(Painting)한다.
    그래서 많은 업데이트 처리 시 과도한 DOM 수정으로 심하면 웹 브라우저가 마비가 될수도있다.

            그러므로 다양한 업데이트를 한 곳에 모아서 DOM을 한번만 수정할 수 있다면 가장 좋다.
            하지만 서비스의 규모가 크다면 신경쓰며 개발하기 쉽지않은데
            React는 이 작업을 Virtual DOM을 사용해서 자동으로 해준다.

        3) Virtual DOM
            수정사항을 Virtual DOM에 모아서 다 모인 수정사항을 Actual DOM에 반영해준다.(DOM 1회 수정)
