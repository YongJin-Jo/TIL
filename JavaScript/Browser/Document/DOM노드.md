# DOM 노드

## DOM 노드 클래스

DOM 노드는 종류에 따라 각각 다른 프로퍼티를 지원합니다.

- `<a>`에 대응하는 요소 노드엔 링크 관련 프로퍼티
- `<input>` 에 대응하는 요소 노드엔 입력 프로퍼티

따라서 DOM 노드 종류에 때라 대응하는 내장 클래스가 다릅니다.

계층 구조 꼭대기엔 EventTarget이 있는데, Node는 EventTarget을, 다른 DOM 노드들은 Node 클래스를 상속 받습니다.

각 클래스의 특징

### EventTarget

루트에 있는 ‘추상’ 클래스, 이 클래스를 대응하는 객체는 실제로 만들어 지지 않습니다.

EventTarget가 모든 DOM 노드의 베이스에 있기 때문에 DOM 노드에서  ‘이벤트’를 사용할 수있습니다. 

### Node

Node 도 ‘추상’ 클래스 입니다. DOM 노드의 베이스 역할을 합니다.  parantNode, nextSibling childNodes 등 주요 노드의 탐색 기능을 제공합니다. Node 클래스의 객체는 절대 생성 되지 않습니다.

이를 상속받는 클래스

- Text
- Element
- Comment

### Element

DOM 요소를 위한 베이스 클래스 입니다.

getElementByTageName, querySelector 같이 요소 전용 탐색을 도와주는 프로퍼티나 메소드가 이를 기반으로 합니다. 

### HTMLElement

HTML 요소 노드의 베이스 열할을 하는 클래스 입니다.

## innerHTML로 내용 조작하기

innerHTML 프로퍼티를 사용하면 요소 안에 HTML을 문자열 형태로 받아올 수 있습니다.

요소 안 HTML을 수정하는 것도 하능합니다. 

### innerHTML +=사용시 주의점

`innerHTML+=` 는 아래와 값은 일을 합니다.

1. 기존 내용 삭제
2. 기존 내용과 새로운 내용을 합친 새로운 내용을 씀

기존 내용이 완전히 삭제된 후 밑바닥부터 다시 내용이 쓰여지기 때문에 이미지 등의 리소스 전부가 다시 로딩 됩니다.

## getElement*로 요소 검색하기

### id를 사용해 요소 검색하기

요소에 id속성이 있으면 `document.getElementById(id)` 를 이용해 접근할 수 있습니다.

id 속성 값을 그대로 딴 전역 변수를 이용해 접근 할 수 있습니다. 

또한 요소를 따서 자동으로 선언된 전역변수는 동일한 이름을 가진 변수가 선언이 되면 무용지물이 됩니다.

```html
<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  // 변수 elem은 id가 'elem'인 요소를 참조합니다.
  elem.style.background = 'red';

  // id가 elem-content인 요소는 중간에 하이픈(-)이 있기 때문에 변수 이름으로 쓸 수 없습니다.
  // 이럴 땐 대괄호(`[...]`)를 사용해서 window['elem-content']로 접근하면 됩니다.
	let elem = 5; // elem은 더이상 <div id="elem">를 참조하지 않고 5가 됩니다.
	alert(elem); // 5
</script>
```

이러한 변수 선언은 사용하면 안됩니다. 스크립트가 간단할 땐 괜찮지만, 코드가 복잡해지면 HTML을 보지 않은 상황에서 코드만 보고 변수의 출처를 알기 힘들기 때문입니다.  

💡 id는 종복 되면 안됩니다.

같은 `id`를 가진 요소가 여러 개 있으면 `document.getElementById` 같이 `id`를  이용해 요소를 검색하는 메소드의 동작이 예측 불 가능 해집니다. 

### querySelectorAll

`elem.querySelectorAll( )` 은  elem의 자식 요소 중 주어진 CSS 선택 자에 대응하는 요소 모두를 반환 합니다.  

### querySelector

`elem.querySelector( )` 은  elem의 자식 요소 중 주어진 CSS 선택 자에 대응하는 첫 번째 요소를 반환합니다, `elem.querySelectorAll(css)[0]`과 동일합니다.

## 살아있는 컬렉션

`'getElementsBy'`로 시작하는 모든 메서드는 *살아있는* 컬렉션을 반환합니다. 문서에 변경이 있을 때마다 컬렉션이 '자동 갱신’되어 최신 상태를 유지합니다.

반면, `querySelectorAll`은 *정적인* 컬렉션을 반환합니다. 컬렉션이 한 번 확정되면 더는 늘어나지 않습니다.

```html
<div>첫 번째 div</div>

<script>
  let divsElements = document.getElementsByTagName('div');
	let divsQuery = document.querySelectorAll('div');
  alert(divs.divsElements ); // 1
  alert(divs.divsQuery ); // 1
</script>

<div>두 번째 div</div>

<script>
  alert(divs.divsElements ); // 1
  alert(divs.divsQuery ); // 2
</script>
```