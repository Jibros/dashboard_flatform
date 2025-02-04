// 수요 기관명
const data = [
  '안양시스마트도시통합센터',
  '시흥시도시정보통합센터',
  '군포시CCTV통합관제센터',
  '수원교통정보센터',
  '화성시스마트도시통합운영센터',
  '동탄시민안전교육센터',
  '안산U-CITY통합관제센터',
  '의왕시CCTV통합관제센터',
  '통일교회(가평)',
  '포천시CCTV스마트안심센터',
]

const colors = [
  ['danger', '지연중'],
  ['primary', '진행중'],
  ['success', '완료'],
]

$(function () {
  // 이슈관리 목록
  const issueListRow = $('.container-issue').find('.issue-row')

  // 이슈관리 목록 HTML
  function issueListHTML(index) {
    const i = index
    const randNum = Math.floor(Math.random() * 3) // 임의의 수 1~3

    const html = `
      <div class="col">
        <div class="issue-card">
          <div class="card">
            <div class="card-header">
              <a href="./issue_view.html" class="btn card-title">${data[i]}</a>
              <div class="card-util">
                <button type="button" class="badge text-bg-${colors[randNum][0]} text-white btn-log">
                  ${colors[randNum][1]}
                </button>
              </div>
            </div>
            <div class="card-body">

              <ul class="list-group">
                <li><em>접수자</em><span>권도용</span></li>
                <li><em>지역</em><span>수도권</span></li>
                <li><em>수요기관</em><span>광명</span></li>
                <li>
                  <em>담당자</em><span>${
                    randNum == 2
                      ? '담당자명'
                      : '<button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target=".modalSearchManager">검색</button>'
                  }</span>                  
                </li>
                <li><em>메인유형</em><span>H/W</span></li>
                <li><em>최초등록일</em><span>2024.09.23</span></li>
                <li><em>마감일정</em><span>2024.09.23</span></li>
                <li><em>지연일정</em><span class="text-${colors[randNum][0]}">D+35</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
    return html
  }

  // 이슈관리 목록 append
  function issueListAddHTML() {
    if (issueListRow.length) {
      for (let i = 0; i < 40; i++) {
        issueListRow.append(issueListHTML(Math.floor(i / 4)))
      }
    }
  }

  if (issueListRow.length)
    // 이슈관리 init()
    issueListAddHTML()

  // 이슈관리 목록 > 카드 우측 뱃지 클릭시 로그 모달 노출
  const issueCard = $('.issue-card')
  if (issueCard.length) {
    const logStateModal = new bootstrap.Modal($('.logStateModal'))
    issueCard.find('.btn-log').on('click', function () {
      logStateModal.show()
    })
  }


  // 멘션 : 사용자 이름
  const userName = ['홍길동', '김철수', '박민수', '이훈']
  
  // 이슈 관리 > 상세 > 에디터 옵션
  const noteOptions = {
    lang: 'ko-KR',
    height: 150,
    maxHeight: 500,
    tabsize: 2,
    focus: true,
    placeholder: '내용을 작성하고 @(으)로 다른 사람을 멘션하세요.',
    toolbar: [
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['strikethrough', 'superscript', 'subscript']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['updateBtn', ['updateBtn']],
    ],
    hint: {
      mentions: userName,
      match: /\B@([a-z|A-Z|\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]*)/,
      search: function (keyword, callback) {
        callback(
          $.grep(this.mentions, function (item) {
            return item.indexOf(keyword) == 0
          }),
        )
      },
      content: function (item) {
        return '@' + item
      },
    },
    buttons: {
      updateBtn: function (context) {
        const ui = $.summernote.ui

        var button = ui.button({
          className: 'text-end btn-primary',
          contents: '<i class="fa fa-child"/> 업데이트',
          tooltip: '업데이트',
          click: function () {
            // 현재 에디터 선택
            const editor = $(context.layoutInfo.note)

            updateEditor(editor) // 업데이트 호출
          },
        })

        return button.render()
      },
    },
  }

  // 에디터 업데이트 (등록))
  function updateEditor(editorSelector) {
    const content = editorSelector.summernote('code')
    console.log('전송할 내용:', content.trim())

    // 메인 에디터가 아닌 경우 destroy 처리
    if (editorSelector.hasClass('mainEditor')) {
      console.log('mainEditor 입니다.')
      editorSelector.summernote('reset') // 에디터 리셋
    } else {
      editorSelector.summernote('destroy') // 에디터 비활성화
      console.log('에디터가 닫혔습니다.')
    }
  }

  // 메인 에디터 실행
  const mainEditor = $('.mainEditor')
  mainEditor.summernote(noteOptions)

  // 댓글 작성
  const replyNote = $('.re-reply .editor-trigger')
  replyNote.on('click', function () {
    $(this).summernote(noteOptions)
  })

  // 댓글 편집 : 편집 버튼 클릭 시 실행
  const replyRowItem = $('.reply-row')
  replyRowItem.find('.btn-modify').on('click', function () {
    const replyModifyNote = $(this).closest('.reply-row').find('.reply-note')
    replyModifyNote.summernote(noteOptions)
  })
})
