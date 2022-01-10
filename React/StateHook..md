# State Hook

## state 변수 선언하기

```tsx
funtion Example(){
	const [count, setCount] = useState(0);
}
```

`useState()`는 state 변수를 선언하기 위해 사용됩니다. 

이 기능은 Class 기반인 `this.state`가 제공하는 기능과 똑같습니다. 일반적으로 일반 변수는 함수가  끝날 때 사라지지만, `state` 변수는 React에 의해 사라지지 않습니다.

`useState()`의 인자로 넘겨주는 값은 `state`의 초기 값 입니다. 

hook은 Class 기반과는 달리 객체일 필요가 없고 숫자 타입과 문자 타입을 가질 수 있습니다.

`useState()`는 state변수와 해당 state 변수를 갱신할 수 있는 함수 두 가지 쌍을 반환합니다.

그래서 선언을 할 때, 변수와 함수를 쌍으로 선언하는 이유입니다.

### 여러 개의 state 변수를 사용하기

```tsx
function ExampleWithManyStates(){
	const [name,setName] = useState("조용진");
	const [age,setAge] = useState(25);
	const [skill,setSkill] = useState(React); 
}
```

위에 State는 지역변수를 가지며 개별적으로 갱신할 수 있습니다.

## state 가져오기

```tsx
<p>선언된 카운트: {count} </p>
```

html 태그에 `{}` 중괄호를 하고 state 입력하면 html 태그에 binding되어 화면에 출력됩니다.

## state 갱신하기

```tsx
<button onClick={() => setCount(count + 1)}>
    Click me
  </button>
```

`useState()` 이용해 선언한 함수를 사용해서 상태 값을 갱신 합니다.