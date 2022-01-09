# Intersection과 Union

## Union Type

유니언 타입은 자바스크립트의 OR 연산자 “`||` ” 와 같이 A이거나 B이다 라는 의미의 타입니다.

```tsx
declare function echo(text:string | number): string|number
```

위 함수의 파라미터 `text` 에는 문자열 타입이나 숫자 타입이 모두 올 수 있습니다. 이처럼 `|` 연산자를 이용하여 타입을 여러 개 연결하는 방식을 **Union 정의 방식**이라고 부릅니다.

## Intersection Type

인터렉션 타입은 여러 타입을 모두 만족하는 하나의  타입을 의미합니다.

```tsx
interface Person{
	name:string;
	age:number;
}

interface Skill{
	subject:string
	career:number;
}

type Teacher = Person & Skill

//Teacher의 타입 정의
type Teacher ={
	name:string;
	age:number;
	subject:string
	career:number;
}
```

Person에 인터페이스 타입 정의와 Skill인터페이스의 타입 정의를 & 연산자를 이용 하여 합친 후 Teacher  이라는 타입에 할당한 코드입니다.

Intersection타입은 `&` 연산자를 이용해 **여러 개의 타입 정의를 하나로 합치는 방식**을 

**Intersection타입 정의 방식**이라고 합니다.

## Union Type 사용 시 주의할 점

```tsx
interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
function introduce(someone: Person | Developer) {
  someone.name; // O 정상 동작
  someone.age; // X 타입 오류
  someone.skill; // X 타입 오류
}
```

타입 스크립트 관점에서는 `introduce()` 함수를 호출하는 시점에 `Person` 타입이 올지 `Developer` 타입이 올지 알 수가 없기 때문에 어느 타입이 들어오든 간에 오류가 안 나는 방향으로 타입을 추론하게 됩니다. 

그러므로 타입 가드(Type Guard)를 이용하여 타입의 법위를 좁히지 않는 이상 기본적으로는 `Person`과 `Developer` 두 타입에 공통적으로 들어있는 속성인 `name`만 접근할 수 있게 됩니다.