$(function () {
  setTimeout(function () {
    // 전역 : 부트스트랩 툴팁, 팝오버 실행
    $('[data-bs-toggle="tooltip"]').each(function (i, item) {
      $(item).tooltip()
    })
    $('[data-bs-toggle="popover"]').each(function (i, item) {
      $(item).popover()
    })

    // 로그인 > 패스워드
    const loginForm = $('.login-form')
    if (loginForm.length) {
      loginForm.find('.bi').on('click', function () {
        const prevInput = $(this).prev('input')
        prevInput.toggleClass('active')

        if (prevInput.hasClass('active')) {
          $(this).attr('class', 'bi bi-eye-fill')
          prevInput.attr('type', 'text')
        } else {
          $(this).attr('class', 'bi bi-eye-slash-fill')
          prevInput.attr('type', 'password')
        }
      })
      // 로그인 버튼
      const invalidModal = new bootstrap.Modal('.modalInvalidMsg')
      $('.btn-login').on('click', function () {
        let valid = true
        if (valid) {
          invalidModal.show()
        } else {
          // 로그인 완료
        }
      })
    }

    // 이슈 등록
    const issueRegistForm = $('.container-regist')
    const registAlert = $('.modalRegistAlert')
    if (issueRegistForm.length || registAlert.length) {
      // 부트스트랩 모달 생성
      const registModal = new bootstrap.Modal(registAlert)

      issueRegistForm.find('.btn-regist').on('click', function () {
        registModal.show()
      })
    }

    // 담당자 검색 모달 내부
    const searchManager = $('.modalSearchManager')
    if (searchManager.length) {
      // 부트스트랩 모달 생성
      const modalSearchManager = new bootstrap.Modal(searchManager)

      searchManager.find('.list-group button').on('click', function () {
        $(this).closest('.card').find('.btn-next').removeAttr('disabled')
      })

      searchManager.find('.btn-next').on('click', function () {
        stepOnOff($(this))
      })

      searchManager.find('.btn-back').on('click', function () {
        stepOnOff($(this))
      })

      searchManager.find('.btn-confirm').on('click', function () {
        confirmFunc(modalSearchManager)
      })

      // 담당자 검색 스텝 온오프
      function stepOnOff(obj) {
        $(obj).closest('.step').hide()
        $(obj).closest('.step').siblings('.step').show()
      }
    }

    // 결재함 > 상세보기 모달
    const confirmState = $('.modalConfirmState')
    const modifyManager = $('.modalModifyManager')
    if (confirmState.length) {
      // 부트스트랩 모달 생성
      const modalConfirmState = new bootstrap.Modal(confirmState)
      const modalModifyManager = new bootstrap.Modal(modifyManager)

      // 승인
      confirmState.find('.btn-approve').on('click', function () {
        confirmFunc(modalConfirmState)
      })

      // 담당자 변경
      confirmState.find('.btn-modify').on('click', function () {
        modalModifyManager.show()

        modifyManager.find('.list-group button').on('click', function () {
          const btnComfirm = modifyManager.find('.btn-confirm')
          btnComfirm.removeAttr('disabled').on('click', function () {
            modalModifyManager.hide()
          })
        })
      })
    }

    // 검색 조건 중 기간 설정 > 직접 입력
    const filterContainer = $('.container-filter')
    if (filterContainer.length) {
      filterContainer.on('click', '.range-date .btn', function () {
        const _this = $(this)
        const state = _this.hasClass('btn-write')

        if (state) {
          filterContainer.find('.calendar-box .datepicker-here').removeAttr('disabled')
        } else {
          filterContainer.find('.calendar-box .datepicker-here').attr('disabled', 'disabled')
          // .datepicker-here 값 지정 (1개월~1년)
          //
        }
      })
    }
  }, 100)
})

// 승인 요청 confirm
function confirmFunc(modal) {
  if (confirm('담당자 승인을 요청하시겠습니까?')) {
    const complateAlert = alert(
      '담당자 승인 요청이 완료되었습니다. \n[담당자 승인 절차]\n1. 접수자 부서장 승인 \n2.담당자 부서장 승인',
    )
    complateAlert
    modal.hide() // bootstrap -> Modal.hide()
  }
}
