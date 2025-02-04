// BS 관리
// BS 통계
$(function () {
  const bsDetail = $('.modalBSDetail')

  const btnSave = bsDetail.find('.btn-save')
  const btnNewIssue = bsDetail.find('.btn-new-issue')

  btnSave.on('click', function () {
    $(this).attr('disabled', true)
    alert('저장이 완료되었습니다. \n신규 이슈 등록해 주세요.')
    btnNewIssue.removeAttr('disabled')
  })
  btnNewIssue.on('click', function () {
    location.href = './issue_regist.html'
  })

  // BS등록/상세보기 모달 shown
  bsDetail.on('shown.bs.modal', function (e) {
    console.log('shown', e)
  })
})
