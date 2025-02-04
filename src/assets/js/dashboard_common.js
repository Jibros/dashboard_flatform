// <p class="badge text-bg-danger">지연중</p>
// <p class="badge text-bg-success">완료</p>
// 대시보드 > 기관 목록 APPEND
const data = [
  ['안양시스마트도시통합센터', '경기용인시', '저장영상 안정화 및 문제 원인 생길 수 있을시 조치 부탁'],
  ['시흥시도시정보통합센터', '부산남구', '통합플랫폼 고도화 사업 및 WEB 12대 영상 안나오는 문제)'],
  ['군포시CCTV통합관제센터', '부산서구', '통합플랫폼 기능 및 데이터 표출 내용 수정 요청'],
  ['수원교통정보센터', '부산소방본부', '통합플랫폼 주소 표기 방법 및 로그아웃 타임 변경'],
  ['화성시스마트도시통합운영센터', '경남창원시', '신규 추가 카메라 지휘관제시스템에 미표출'],
  ['동탄시민안전교육센터', '부산진구', '귀갓길 수호자 제대로 운영하기 위한 전체 시스템 점검'],
  ['안산U-CITY통합관제센터', '충북청주시', '일부 시방범 카메라 라이브, 저장영상 다운로드, PTZ 제어 지연'],
  ['의왕시CCTV통합관제센터', '부산진구', '진행 상황 보고 감사하며, 내년부터 활성화 예정이니 많은 지원 바랍니다.'],
  [
    '통일교회(가평)',
    '부산남구',
    'OOOO 문제는 아닌데 시방범 카메라 영상과 투어링 끊어지는 문제가 있는데 빨리 해결됐으면 좋겠습니다.',
  ],
  ['포천시CCTV스마트안심센터', '부산영도구', '특이사항 없습니다.'],
]
const colors = [
  ['danger', '지연중'],
  ['primary', '진행중'],
  ['success', '완료'],
]

$(function () {
  const institutionList = $('.institution-list')
  const institutionListRow = institutionList.find('.row')

  // 기관 목록 collapsed
  $('.btn-collapse').on('click', function () {
    let _state = institutionList.hasClass('collapse')

    if (_state) {
      $(this).addClass('active')
      institutionList.removeClass('collapse')
      institutionAddHtml() // html 삽입
      cardMarkerActive() // 마커 활성화 실행
    } else {
      $(this).removeClass('active')
      institutionList.addClass('collapse')
      institutionDelete() // html 제거
    }
  })

  function institutionHTML(index) {
    const i = index
    const randNum = Math.floor(Math.random() * 3) // 임의의 수 1~3

    const html = `
      <div class="col">
        <div class="card card-institution">
          <div class="card-body">
            <div class="card-util">
              <p class="badge text-bg-${colors[randNum][0]} text-white">${colors[randNum][1]}</p>
              <p class="badge tx-date text-bg-light">작업기간 : {7}일</p>
            </div>
            <table class="table table-light">
              <thead>
                <tr>
                  <th colspan="4">
                    <button type="button" class="btn tit btn-marker"><i class="bi bi-geo-alt"></i> ${data[i][0]}</button>
                  </th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr>
                  <td colspan="4">
                    <a href="./issue_view.html" class="txt-link"><strong>[${data[i][1]}]</strong> ${data[i][2]}</a>
                  </td>
                </tr>
                <tr>
                  <td><div class="d-flex"><p class="tit">접수자</p><p class="txt">홍길동</p></div></td>
                  <td><div class="d-flex"><p class="tit">담당자</p><p class="txt">홍길동${randNum}</div></td>
                </tr>
                <tr>
                  <td><div class="d-flex"><p class="tit">메인유형</p><p class="txt">H/W</p></div></td>
                  <td><div class="d-flex"><p class="tit">세부유형</p><p class="txt">카메라 파손</p></div></td>
                </tr>
                <tr>
                  <td><div class="d-flex"><p class="tit">등록일</p><p class="txt">2024.11.11</p></div></td>
                  <td><div class="d-flex"><p class="tit">마감일</p><p class="txt">2024.11.15</p></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `
    return html
  }

  // html prepend
  function institutionAddHtml() {
    if (institutionListRow) {
      for (let i = 0; i < 8; i++) {
        institutionListRow.prepend(institutionHTML(i))
      }
    }
  }

  // html 제거
  function institutionDelete() {
    institutionListRow.empty()
  }

  // 기관 마커 활성화/비활성화
  // 활성화 시 : 지도 마커 이동
  function cardMarkerActive() {
    // 대시보드 > 기관 마커 버튼
    const mapCard = $('.card-institution')
    mapCard.each((index, item) => {
      const _btn = $(item).find('.btn-marker')
      $(_btn).on('click', function () {
        $(mapCard).removeClass('active')

        $(this).closest(item).addClass('active')
      })
    })
  }
})
