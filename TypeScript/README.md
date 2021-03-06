# TypeScript

## 타입 스크립트란?

- 타입 스크립트란 자바 스크립트에 타입을 부여한 언어입니다.
- 타입 스크립트는 자바스크립트와 다르게 브라우저에서 실행하기 위해 파일을 한번 변환 해주어야 합니다. 이 변환 과정을 컴파일(complile)이라고 부릅니다.

## 타입 스크립트를 쓰는 이유

<blockquote>
에러의 사전 방지
</blockquote>

- 기존에 자바스크립트의 Object 확인할 때  브라우저의 로그를 찍어야만 확인을 할 수 있습니다.

- 타입 스크립트는 Object의 property 확인 때 먼저 타입을 선언을 하기 때문에 브라우저 로그를 찍지 않아도 코드 상에서 확인해 에러를 잡아 줄 수 있다.( 타입 정의에 장점)
  
<blockquote>
코드 자동 완성 가이드
</blockquote>
  
- TS에서 매개변수의 타입과 인자의 타입이 서로 다를 때 코드 상 오류가 있으면 알려 준다.
  
- 매개변수를 선언한 타입에 따라 사용할 수 있는 함수가 타입 별로 자동적으로 제한 된다.
