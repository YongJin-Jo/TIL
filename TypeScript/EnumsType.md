# Enums

## 숫자 열거형

```tsx
//초기화를 한경우
enum day{
	Monthday =1,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday
}

//초기화를 하지 않은 경우
enum day{
	Monthday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday
}
```

위코드에서 `mothday`이 1로 초기화된 숫자열을 선언했습니다. 그 지점부터 뒤따르는 멤버들은 자동으로 증가된 값을 갖습니다.

즉 `day.Monthday` 는 `1` ,`day.Tuesday` 은 `2`, `day.Wednesday` 은 `3` 을 값으로 가집니다.

초기화를 하지 않을 경우 `Monthday` 값은 0, `Tuesday` 값은 1로됩니다.

### 열거형 사용하는 방법

```tsx
enum Response {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response): void {
    // ...
}

respond("Princess Caroline", Response.Yes)
```

## 문자열 열거형

```tsx
enum day{
	Monthday = 'Monthday',
	Tuesday = 'Tuesday',
	Wednesday = 'Wednesday',
	Thursday = 'Thursday',
	Friday = 'Friday',
	Saturday = 'Saturday',
	Sunday = 'Sunday'
}
```

문자열 열거형은 “직열화”를 잘한다는 이점이 있습니다. 문자열 열거형을 이용하면 코드를 실행할 때, 열거형 멤버에 지정된 이름과는 무관하게 유의미하고 일기 좋은 값을 이용하여 실행할 수 있습니다.

## 계산된 멤버와 상수 멤버

```tsx
enum FileAccess {
    // 상수 멤버
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // 계산된 멤버
    G = "123".length
}
```

상수 열거형 표현식 종류

- 리터럴 열거형 표현식
- 이전에 정의된 다룬 상수 열거형 멤버에 대한 참조
- 괄호로 묶인 상수 열거형 표현식
- 단한 연산자를 사용한 경우
- 이중 연산자를 사용한 경우

이외 다른 경우 열거형 멤버는 계산된 것으로 간주합니다.

## 유니언 열거형과 열거형 멤버 타입

계산되지 않는 상수 열거형 멤버는 특수한 부분 집합이 있습니다. 

리터럴 열거형 멤버는 초기화 값이 존재하지 않거나, 아래 값들로 초기화 되는 멤버입니다.

- 문자 리터럴 (예시. `"foo"`, `"bar`, `"baz"`)
- 숫자 리터럴 (예시. `1`, `100`)
- 숫자 리터럴에 단항 연산자 `` 가 적용된 경우 (e.g. `1`, `100`)

열거형의 모든 멤버가 리터럴 열거형 값을 가지면 특별한 의미로 사용됩니다.

열거형 멤버를 타입처럼 사용할수 있습니다.

```tsx
enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    kind: ShapeKind.Square, // 오류! 'ShapeKind.Circle' 타입에 'ShapeKind.Square' 타입을 할당할 수 없습니다.
    radius: 100,
}
```

열거형 타입 자체가 각각의 열거형 멤버의 유니언이 된다는 점

```tsx
enum E {
    Foo,
    Bar,
}

function f(x: E) {
    if (x !== E.Foo || x !== E.Bar) {
        //             ~~~~~~~~~~~
        // 에러! E 타입은 Foo, Bar 둘 중 하나이기 때문에 이 조건은 항상 true를 반환합니다.
    }
}
```

## 역 매핑

숫자 열거형 멤버는 멤버는 열거형 이름으로 역 매핑을 받습니다.

```tsx
enum Enum {
    A
}
let a = Enum.A; // 0
let nameOfA = Enum[a]; // "A"
```

## const 열거형

const 열거형은 상수 열거형 표현식만 사용될 수 있습니다. 일반적인 열거형과 다르게 컴파일 과정에서 완전히 제거 됩니다. const 열거형은 사용하는 공간에 인라인 됩니다.

const 열거형은 계산된 멤버를 가지고 안기 때문에 가능합니다.

```tsx
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

//컴파일 된 코드
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
```

## Ambient 열거형

Ambient 열거형은 이미 존재하는 열거형 타입의 모습을 묘사하기 위해 사용됩니다.

일반 열거형과 Ambient 열거형의 큰 차이점

일반 열거형은 초기화가 되지 않은 멤버가 상수로 간주하는 멤버 뒤에 있다면, 이 멤버도 상수로 간주할 것입니다.  반면 Ambient 열거형은  초기화가 되지 않은 멤버는 항상 계산된 멤버로 간주합니다.