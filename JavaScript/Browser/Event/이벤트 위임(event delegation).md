# 이벤트 위임(event delegation)
event Delegation을 사용하면 요소마다 핸들러를 할당하지 않고, 요소의 공통 조상에 이벤트 핸들러를 단 하나만 할당해도 여러 요소를 한꺼번에 다를 수 있습니다.

```html
<table>
  <tr>
    <th colspan="3"><em>Bagua</em> Chart: Direction, Element, Color, Meaning</th>
  </tr>
  <tr>
    <td class="nw"><strong>Northwest</strong><br>Metal<br>Silver<br>Elders</td>
    <td class="n">...</td>
    <td class="ne">...</td>
  </tr>
  <tr>...2 more lines of this kind...</tr>
  <tr>...2 more lines of this kind...</tr>
</table>
```

```jsx
let selectedTd;

table.onclick = function(event) {
  let target = event.target; // 클릭한 태그 위치

  if (target.tagName != 'TD') return; // TD에서 발생한 게 아니라면 아무 작업도 하지 않습니다,

  highlight(target); // 강조 함
};

function highlight(td) {
  if (selectedTd) { // 이미 강조되어있는 칸이 있다면 원상태로 바꿔줌
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // 새로운 td를 강조 함
}
```

**해당 코드는 `<td>`를 클릭했을 때 그 칸을 강조하는 것입니다.**  

각 `<td>`마다 `onclick` 핸들러를 할당하는 대신, ‘모든 이벤트를 잡아내는 핸들러를 `<table>` 요소에 할당해 보겠습니다.

`<table>` 요소에 할당하게 될 핸들러는 `event.target`을 이용해 어떤 요소가 클릭 되었는지 감지하고, 해당 칸을 강조하게 됩니다.

이렇게 event Delegation을 사용하여 구현하면 같은 핸들러를 반복 적으로 넣을 필요 없이 간결하고 효율 적이게 구현할 수 있습니다.

하지만 event Delegation을 이용해 함수를 호출하려면 event.taget의 태그 값이 정확하게 들어와야 합니다. 

```html
<td>
  <strong>Northwest</strong>
  ...
</td>
```

만약  event.taget 태그가 `td` 기 아닌 `strong` 이 들어온다면 자식 태그일지라도 이벤트가 되지 않는 다는 점입니다. 

이 문제 점을 해결하기 위해서  `elem.closest(selector)` 사용하여 해결합니다.

`elem.closest(selector)` 는 `elem`의 상위 요소 중 `selector`와 일치하는 가장 근접한 조상 요소를 반환합니다.  그래서 `strong` 태그를 눌렀어도 `tr`로  출력할 수 있게 되는 것 입니다.

**장점**

- 많은 핸들러를 할당하지 않아도 되기 때문에 초기화가 단순해지고 메모리가 절약됩니다.
- 요소를 추가하거나 제거할 때 요소에 할당된 핸들러를 추가하거나 제거할 필요가 없기 때문에 코드가 짧아집니다.
- innerHTML이나 유사한 기능을 하는 스크립트로 요소 덩어리를 더하거나 뺄 수 있기 때문에 DOM 수정이 쉬워집니다.

**단점**

- 이벤트 위임을 사용하려면 이벤트가 반드시 버블링 되어야 합니다. 하지만 몇몇 이벤트는 버블링 되지 않습니다. 그리고 낮은 레벨에 할당한 핸들러엔 `event.stopPropagation()`를 쓸 수 없습니다.
- 컨테이너 수준에 할당된 핸들러가 응답할 필요가 있는 이벤트이든 아니든 상관없이 모든 하위 컨테이너에서 발생하는 이벤트에 응답해야 하므로 CPU 작업 부하가 늘어날 수 있습니다. 그런데 이런 부하는 무시할만한 수준이므로 실제로는 잘 고려하지 않습니다.