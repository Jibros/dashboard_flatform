## 클래스 네이밍

---

- 해상도 대응 : 1232px(최소) ~ 1920px(최대)
- base font size : 16px
- 기본적인 클래스는 부트스트랩에서 제공하는 클래스를 사용한다. (container, row, col, card, modal 등)
  - flex, grid 위주의 클래스 사용 (row, col)
- 부트스트랩 클래스 중 꾸미는 용도의 클래스는 되도록 지양한다. (p-0, border-bottom 등)
- 레이아웃을 위한 속성은 시멘틱 네이밍 클래스에 직접 사용 (header, aside, main, section 등)
- 동일한 포맷에 유니크한 영역이 있는 경우 별도 클래스 지정 (header header-'pages')
- 부트스트랩의 컴퍼넌트&폼 의 클래스는 최대한 상속 받아 사용(수정 지양, 별도 클래스 지정하여 style 변경)
- 모듈화 가능하도록, scss 작성 시, 최상위 클래스 하위 중첩 작성(nesting)

---

# html (pages)

## /layout/\*.html

> ASIDE, HEADER 등 레이아웃 공통 영역

## /components

> 퍼블 페이지에서 공통으로 사용되는 영역 모음

---

# js (assets/js)

## /common.js

> 공통 event

## /{page}\_\*?\_common.js

> 페이지/컴퍼넌트별 event
> 예) dashboard_common.js, issue_common.js 등

## /js/vendor

> 라이브러리, 플러그인 등 폴더별 관리
>
> > jQuery v3.6.0
> > ApexCharts v4.3.0
> > Bootstrap v5.2.3
> > Datepicker v2.2.3
> > Summernote vbs5

---

# SCSS (assets/scss)

## /bootstrap

> 부트스트랩 scss / custom bootstrap variable
> 부투스트랩 아이콘은 CDN 참조 (용량이 커서 직접 관리하지 않음)

## /components

> 공통으로 사용하고자 하는 컴퍼넌트 단위별 작성

## /pages

> 페이지 별 scss 작성


---

## formatter
Prettier 적용 

### .prettierrc

```js
  {
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true,
    "printWidth": 120,
    "overrides": [
      {
        "files": "*.html",
        "options": {
          "tabWidth": 2,
          "printWidth": 500,
          "singleQuote": false
        }
      },
      {
        "files": "*.{scss,css}",
        "options": {
          "tabWidth": 2,
          "singleQuote": true
        }
      },
      {
        "files": ["*.js", "*.jsx"],
        "options": {
          "trailingComma": "all",
          "semi": false
        }
      }
    ]
  }
```

### .vscode/settings.json
```js
  {
    "editor.formatOnSave": true,
  }
```



