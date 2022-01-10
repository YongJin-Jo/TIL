# Effect Hook

Effect Hook은 함수 컴포넌트에서 side effect를 수행합니다.

```tsx
function Example() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 같은 방식으로
  useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
} 
```

### useEffect가 하는 일

React에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야 하는 지를 말합니다.  React는 우리가 넘긴 함수를 기억했다 DOM 업데이트를 수행한 이후에 불러낼 것 입니다.

### useEffect를 컴포넌트 안에서 불러내야 하는 이유

`useEffect`를 컴포넌트 내부에 둠으로써  state 변수에 접근 할 수 있게 됩니다. 그래서 API 없이도 값을 얻을 수 있는 것입니다. Hook은 JS에 클로저를 이용하여 문제를 해결합니다.

`useEffect`는 처번째 랜더링과 이후의 모든 업데이트에서 수행됩니다. React는 effect가 수행되는 시점에 이미 DOM이 업데이트 되었음을 보장합니다.

💡`useEffect`에서 사용되는 effect는 브라우저가 화면을 업데이트 하는 것을 차단하지 않습니다.

이를 통해 어플리케이션에 반응성을 향상 해줍니다. 

## Clean-up을 이용하는 Effects

```tsx
import React, {useState, useEffect} from "react";
import "./styles.css";

export default function App() {
const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect !")
    return () => {
      console.log(count)
    }
  },[count])

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

React는 컴포넌트가 마운트 해제될 때 Clean-up을 실행합니다. 

그래서 이전 값을 바라보고 있기 때문에 해당 값을 리턴 해줍니다.

![clean-up-view.png](/React/img/clean-up-view.png)

![clean-up-log.png](/React/img/clean-up-log.png)

그림을 보면 count 3일 때 로그를 보면 2가 출력 된 것을 볼 수 있을 것이다.

## 💡Tip

### effect가 업데이트 시마다 실행되는 이유

기존  class 기반일 때  각 생명주기에 따른  역할이 달랐기 때문에 맞는 메소드를 따로 호출했어야 했습니다. 하지만 hook으로 오면 effect 함수가 기본적으로 업데이트를 다루기 때문에 따로 코드가 필요 없어지기 때문입니다.  이런 방식은 일관성을 유지해주며 class 컴포넌트에서 흔히 업데이트 로직을 빼 먹으면서 발생할 수 있는 버그를 예방합니다.