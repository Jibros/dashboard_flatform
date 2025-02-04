$(function () {
  const LEGEND_FONT_SIZE = 14
  const COLORS = [
    '#5C60F5',
    '#3F3BED',
    '#008FFB',
    '#FF8C00',
    '#FF3366',
    '#2BD976',
    '#00CC88',
    '#17A2B8',
    '#41D3EA',
    '#2926C5',
    '#A845D3',
    '#2BC4D9',
    '#0352AE',
  ]
  const GRAY_COLOR = '#666'

  const noDataOptions = {
    text: '해당 유형은 세부유형 데이터가 없습니다.',
    align: 'center',
    verticalAlign: 'middle',
    offsetX: 0,
    offsetY: 0,
  }

  // 메인 유형(전체) - BAR
  const caseMainOptions = {
    series: [
      {
        name: '전체',
        data: [162, 77, 88, 88, 45],
      },
    ],
    colors: COLORS,
    chart: {
      height: '100%',
      type: 'bar',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    grid: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        borderRadius: 12,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      showForSingleSeries: true,
      fontSize: LEGEND_FONT_SIZE,
      color: GRAY_COLOR,
      itemMargin: { horizontal: 8 },
      markers: { size: 5, strokeWidth: 1, offsetX: -3, shape: 'circle' },
    },
    xaxis: {
      type: 'category',
      categories: ['H/W', 'S/W', 'OS', 'NW', '요청사항'],
      tickPlacement: 'on',
      axisTicks: { height: 0 },
      axisBorder: {
        color: GRAY_COLOR,
        opacity: 0.1,
      },
      labels: {
        style: {
          fontSize: 12,
        },
        trim: false,
        hideOverlappingLabels: true,
        rotate: -45,
        rotateAlways: false,
      },
      tooltip: { enabled: true },
    },
    yaxis: {
      show: true,
      labels: {
        maxWidht: 34,
        offsetX: -10,
        style: {
          colors: GRAY_COLOR,
          fontSize: 12,
        },
      },
    },
    tooltip: {
      enabled: true,
      theme: 'light',
      shared: true,
      intersect: false,
      x: { show: true },
      y: {
        formatter: function (val) {
          return +val + '건'
        },
      },
      style: { fontSize: 12 },
      marker: {
        show: true,
        style: {
          size: 5,
          strokeWidth: 0,
          offsetX: 0,
          shape: 'circle',
        },
      },
    },
  }

  // 메인 유형(전체) - PIE
  const caseMainPieOptions = {
    series: [20, 65, 20, 34, 20],
    labels: ['H/W', 'S/W', 'OS', 'NW', '요청사항'],
    colors: COLORS,
    chart: {
      height: '100%',
      type: 'pie',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    pie: {
      startAngle: 0,
      endAngle: 360,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'right',
      showForSingleSeries: true,
      fontSize: LEGEND_FONT_SIZE,
      color: GRAY_COLOR,
      itemMargin: { horizontal: 8 },
      markers: { size: 5, strokeWidth: 1, offsetX: -3, shape: 'circle' },
    },
  }

  // 상세 유형(지역) - BAR
  const caseDetailOptions = {
    series: [
      {
        name: '전체',
        data: [162, 77, 88, 88],
      },
    ],
    colors: COLORS,
    chart: {
      height: '100%',
      type: 'bar',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    grid: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        borderRadius: 12,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      showForSingleSeries: true,
      fontSize: LEGEND_FONT_SIZE,
      color: GRAY_COLOR,
      itemMargin: { horizontal: 8 },
      markers: { size: 5, strokeWidth: 1, offsetX: -3, shape: 'circle' },
    },
    xaxis: {
      type: 'category',
      categories: ['VMS', '모바일 APP', 'Web Service', '지능형영상 분석시스템'],
      tickPlacement: 'on',
      axisTicks: { height: 0 },
      axisBorder: {
        color: GRAY_COLOR,
        opacity: 0.1,
      },
      labels: {
        style: {
          fontSize: 12,
        },
        trim: false,
        hideOverlappingLabels: true,
        rotate: -45,
        rotateAlways: false,
      },
      tooltip: { enabled: true },
    },
    yaxis: {
      show: true,
      labels: {
        maxWidht: 34,
        offsetX: -10,
        style: {
          colors: GRAY_COLOR,
          fontSize: 12,
        },
      },
    },
    tooltip: {
      enabled: true,
      theme: 'light',
      shared: true,
      intersect: false,
      x: { show: true },
      y: {
        formatter: function (val) {
          return +val + '건'
        },
      },
      style: { fontSize: 12 },
      marker: {
        show: true,
        style: {
          size: 5,
          strokeWidth: 0,
          offsetX: 0,
          shape: 'circle',
        },
      },
    },
  }

  // 상세 유형(지역) - PIE
  const caseDetailPieOptions = {
    series: [20, 13, 20, 46],
    labels: ['VMS', '모바일 APP', 'Web Service', '지능형영상 분석시스템'],
    colors: COLORS,
    chart: {
      height: '100%',
      type: 'pie',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    pie: {
      startAngle: 0,
      endAngle: 360,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'right',
      showForSingleSeries: true,
      fontSize: LEGEND_FONT_SIZE,
      color: GRAY_COLOR,
      itemMargin: { horizontal: 8 },
      markers: { size: 5, strokeWidth: 1, offsetX: -3, shape: 'circle' },
    },
  }

  // 세부 유형 1뎁스(지역) - BAR
  const caseDepth1Option = {
    series: [
      {
        name: '전체',
        data: [162, 77, 88, 88, 162, 77, 88, 88, 162, 77, 88, 88, 162, 77, 88, 88, 162, 77, 88, 88, 162, 77, 88],
      },
    ],
    colors: COLORS,
    chart: {
      height: '100%',
      type: 'bar',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    grid: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 12,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      showForSingleSeries: true,
      fontSize: LEGEND_FONT_SIZE,
      color: GRAY_COLOR,
      itemMargin: { horizontal: 8 },
      markers: { size: 5, strokeWidth: 1, offsetX: -3, shape: 'circle' },
    },
    xaxis: {
      type: 'category',
      categories: [
        '관리서버',
        '스트림서버',
        '운영뷰어',
        '관리뷰어',
        '영상반출다운로드',
        'API서버',
        '중계서버',
        '이벤트관리서버',
        'E-MAP',
        '통합플랫폼',
        'IOT플랫폼',
        '특정 플랫폼',
        '지도관제시스템',
        '대시민서비스',
        '안전귀가관리자WEB',
        '안전귀가',
        '체납',
        '산책로',
        '폐기물',
        '대시민서비스',
        'OOOO',
        '엠제이',
        '인텔리빅스',
      ],
      tickPlacement: 'on',
      axisTicks: { height: 0 },
      axisBorder: {
        color: GRAY_COLOR,
        opacity: 0.1,
      },
      labels: {
        style: {
          fontSize: 12,
        },
        trim: false,
        hideOverlappingLabels: true,
        rotate: -45,
        rotateAlways: true,
      },
      tooltip: { enabled: true },
    },
    yaxis: {
      show: true,
      labels: {
        maxWidht: 34,
        offsetX: -10,
        style: {
          colors: GRAY_COLOR,
          fontSize: 12,
        },
      },
    },
    tooltip: {
      enabled: true,
      theme: 'light',
      shared: true,
      intersect: false,
      x: { show: true },
      y: {
        formatter: function (val) {
          return +val + '건'
        },
      },
      style: { fontSize: 12 },
      marker: {
        show: true,
        style: {
          size: 5,
          strokeWidth: 0,
          offsetX: 0,
          shape: 'circle',
        },
      },
    },
  }

  // 세부 유형 1뎁스(지역) - TREEMAP
  const caseDepth1TreeMapOption = {
    series: [
      {
        data: [
          { x: '이벤트관리서버', y: 4 },
          { x: '안전귀가관리자 WEB', y: 5 },
          { x: '폐기물', y: 5 },
          { x: '관리서버', y: 5 },
          { x: 'E-MAP', y: 5 },
          { x: '대시민서비스', y: 5 },
          { x: '대시민서비스', y: 5 },
          { x: '운영뷰어', y: 15 },
          { x: '중계서버', y: 5 },
          { x: '통합플랫폼', y: -5 },
          { x: '관리뷰어', y: 5 },
          { x: '지도관제시스템', y: 5 },
          { x: 'OOOO', y: 5 },
          { x: '틍정 플랫폼', y: -5 },
          { x: '산책로', y: 5 },
          { x: '인텔리빅스', y: 5 },
          { x: 'API서버', y: 5 },
          { x: 'IOT플랫폼', y: 5 },
          { x: '체납', y: 5 },
          { x: '엠제이', y: 5 },
          { x: '영상반출다운로드', y: 5 },
          { x: '안전귀가', y: 5 },
          { x: '스트림서버', y: 5 },
        ],
      },
    ],
    colors: COLORS,
    chart: {
      height: '100%',
      type: 'treemap',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: 12,
      },
      formatter: function (text, op) {
        return [text, op.value + '%']
      },
      offsetY: -4,
    },
    plotOptions: {
      treemap: {
        enableShades: false,
        distributed: true,
      },
    },
    tooltip: {
      enabled: true,
      theme: 'light',
      x: { show: false },
      y: {
        formatter: function (val) {
          return +val + '%'
        },
      },
      style: { fontSize: 12 },
      marker: {
        show: true,
        style: {
          size: 5,
          strokeWidth: 0,
          offsetX: 0,
          shape: 'circle',
        },
      },
    },
    noData: noDataOptions,
  }

  // 세부 유형 1뎁스(지역) - BAR
  const caseDepth2Option = {
    series: [
      {
        name: '전체',
        data: [
          162, 77, 88, 88, 162, 77, 88, 88, 162, 77, 88, 88, 162, 77, 88, 88, 162, 77, 88, 88, 162, 77, 88, 162, 77,
        ],
      },
    ],
    colors: COLORS,
    chart: {
      height: '100%',
      type: 'bar',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    grid: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 12,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      showForSingleSeries: true,
      fontSize: LEGEND_FONT_SIZE,
      color: GRAY_COLOR,
      itemMargin: { horizontal: 8 },
      markers: { size: 5, strokeWidth: 1, offsetX: -3, shape: 'circle' },
    },
    xaxis: {
      type: 'category',
      categories: [
        '업데이트',
        'DB용량정리',
        '접속안됨',
        '부팅안됨',
        '다운',
        '재시작',
        '접속지연',
        '사용자계정접속제한문제',
        '설정',
        '연결 끊어짐',
        '재시작',
        '업데이트',
        '영상미저장',
        '저장영상미표출',
        '저장영상끊어짐',
        '저장영상다운로드',
        '노드재분배',
        '설정',
        '스토리지삭제',
        '스토리지증설',
        '스토리지에러',
        '스토리지점검',
        '카메라 영상 미표출',
        '카메라 영상 표출 문제',
        '카메라 정보 수정',
      ],
      tickPlacement: 'on',
      axisTicks: { height: 0 },
      axisBorder: {
        color: GRAY_COLOR,
        opacity: 0.1,
      },
      labels: {
        trim: false,
        hideOverlappingLabels: true,
        rotate: -45,
        rotateAlways: true,
      },
      tooltip: { enabled: true },
    },
    yaxis: {
      show: true,
      labels: {
        maxWidht: 34,
        offsetX: -10,
        style: {
          colors: GRAY_COLOR,
          fontSize: 12,
        },
      },
    },
    tooltip: {
      enabled: true,
      theme: 'light',
      shared: true,
      intersect: false,
      x: { show: true },
      y: {
        formatter: function (val) {
          return +val + '건'
        },
      },
      style: { fontSize: 12 },
      marker: {
        show: true,
        style: {
          size: 5,
          strokeWidth: 0,
          offsetX: 0,
          shape: 'circle',
        },
      },
    },
  }

  // 세부 유형 1뎁스(지역) - TREEMAP
  const caseDepth2TreeMapOption = {
    series: [
      {
        data: [
          { x: '이벤트관리서버', y: 4 },
          { x: '안전귀가관리자 WEB', y: 5 },
          { x: '폐기물', y: 5 },
          { x: '관리서버', y: 5 },
          { x: 'E-MAP', y: 5 },
          { x: '대시민서비스', y: 5 },
          { x: '대시민서비스', y: 5 },
          { x: '운영뷰어', y: 15 },
          { x: '중계서버', y: 5 },
          { x: '통합플랫폼', y: -5 },
          { x: '관리뷰어', y: 5 },
          { x: '지도관제시스템', y: 5 },
          { x: 'OOOO', y: 5 },
          { x: '틍정 플랫폼', y: -5 },
          { x: '산책로', y: 5 },
          { x: '인텔리빅스', y: 5 },
          { x: 'API서버', y: 5 },
          { x: 'IOT플랫폼', y: 5 },
          { x: '체납', y: 5 },
          { x: '엠제이', y: 5 },
          { x: '영상반출다운로드', y: 5 },
          { x: '안전귀가', y: 5 },
          { x: '스트림서버', y: 5 },
          { x: '이벤트관리서버', y: 4 },
          { x: '안전귀가관리자 WEB', y: 5 },
          { x: '폐기물', y: 5 },
          { x: '관리서버', y: 5 },
          { x: 'E-MAP', y: 5 },
          { x: '대시민서비스', y: 5 },
          { x: '대시민서비스', y: 5 },
          { x: '운영뷰어', y: 15 },
          { x: '중계서버', y: 5 },
          { x: '통합플랫폼', y: -5 },
          { x: '관리뷰어', y: 5 },
          { x: '지도관제시스템', y: 5 },
          { x: 'OOOO', y: 5 },
          { x: '틍정 플랫폼', y: -5 },
          { x: '산책로', y: 5 },
          { x: '인텔리빅스', y: 5 },
          { x: 'API서버', y: 5 },
          { x: 'IOT플랫폼', y: 5 },
          { x: '체납', y: 5 },
          { x: '엠제이', y: 5 },
          { x: '영상반출다운로드', y: 5 },
          { x: '안전귀가', y: 5 },
          { x: '스트림서버', y: 5 },
        ],
      },
    ],
    colors: COLORS,
    chart: {
      height: '100%',
      type: 'treemap',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: 12,
      },
      formatter: function (text, op) {
        return [text, op.value + '%']
      },
      offsetY: -4,
    },
    plotOptions: {
      treemap: {
        enableShades: false,
        distributed: true,
      },
    },
    tooltip: {
      enabled: true,
      theme: 'light',
      x: { show: false },
      y: {
        formatter: function (val) {
          return +val + '%'
        },
      },
      style: { fontSize: 12 },
      marker: {
        show: true,
        style: {
          size: 5,
          strokeWidth: 0,
          offsetX: 0,
          shape: 'circle',
        },
      },
    },
    noData: noDataOptions,
  }

  // 메인 유형(전체) - BAR & PIE
  const caseMainBar = new ApexCharts(document.querySelector('#caseMainChart'), caseMainOptions)
  const caseMainPie = new ApexCharts(document.querySelector('#caseMainChart_PIE'), caseMainPieOptions)
  // 상세 유형(지역) - BAR & PIE
  const caseDetailBar = new ApexCharts(document.querySelector('#caseDetailChart'), caseDetailOptions)
  const caseDetailPie = new ApexCharts(document.querySelector('#caseDetailChart_PIE'), caseDetailPieOptions)
  // 세부 유형1(지역)) - BAR & TREE
  const caseDepth1Bar = new ApexCharts(document.querySelector('#caseDepth1Chart'), caseDepth1Option)
  const caseDepth1Treemap = new ApexCharts(document.querySelector('#caseDepth1Chart_Treemap'), caseDepth1TreeMapOption)
  // 세부 유형2(지역)) - BAR & TREE
  const caseDepth2_1Bar = new ApexCharts(document.querySelector('#caseDepth2_1Chart'), caseDepth2Option)
  const caseDepth2_2Bar = new ApexCharts(document.querySelector('#caseDepth2_2Chart'), caseDepth2Option)
  const caseDepth2_3Bar = new ApexCharts(document.querySelector('#caseDepth2_3Chart'), caseDepth2Option)
  const caseDepth2_4Bar = new ApexCharts(document.querySelector('#caseDepth2_4Chart'), caseDepth2Option)
  const caseDepth2Treemap = new ApexCharts(document.querySelector('#caseDepth2Chart_Treemap'), caseDepth2TreeMapOption)

  caseMainBar.render()
  caseMainPie.render()
  caseDetailBar.render()
  caseDetailPie.render()
  caseDepth1Bar.render()
  caseDepth1Treemap.render()
  caseDepth2_1Bar.render()
  caseDepth2_2Bar.render()
  caseDepth2_3Bar.render()
  caseDepth2_4Bar.render()
  caseDepth2Treemap.render()
})
