# 문서


## 브라우저 환경

자바스크립트가 돌아가는 플랫폼은 **호스트(host)** 라고 불립니다. 

**호스트**는 브라우저, 웹 서버 등이 있습니다. 각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, 자바스크립트 명세서에는 이를 **호스트 환경(*host environment*)**이라고 부릅니다. 

 

### window 객체의 역할

---

window는 최상단에 ‘루트’ 객체라고 불립니다. window 객체는 2가지 역할을 합니다. 

- 자바스크립트의 전역 객체입니다.
- 브라우저 창(browser window)을 대변하고, 이를 제어할 수 있는 메서드를 제공합니다.

<blockquote>
window를 전역 객체로 사용한 예시  
</blockquote>

```tsx
function logText(){
	alert("안녕하세요")
}

//전역 함수는 전역 객체(window)의 메서드임
window.logText()
```

<blockquote>
`window`를 브라우저 창을 대변하고 있는 예시
</blockquote>

```tsx
alert(window.innerHeight); //창 내부 (inner window) 높이
```

### 문서 객체 모델(DOM)

---

DOM은 웹 페이지 내의 모든 콘텐츠를 객체로 나타내줍니다. 이 객체는 수정이 가능합니다.

`document` 객체는 페이지의 ‘진입점’ 역할을 합니다. 이것을 이용하여 페이지 내 변경과, 생성을 할 수 있습니다.

```tsx
document.body.background ="black"
```

### 브라우저 객체 모델(BOM)

---

BOM은 문서 이외의 모든것을 제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.

`navigator, location, alert, confirm, prompt` 와 같이 문서와 직접 연결은 되어있지 않지만, 브라우저 사이의 커뮤니케이션을 도와주는 순수 브라우저 메서드 입니다.