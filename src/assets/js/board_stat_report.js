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

  // AS 건수 : 접수/진행/지연/완료 options
  const asTotalLineOptions = {
    series: [
      {
        name: '',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 129, 58, 83],
      },
    ],
    colors: COLORS,
    chart: {
      height: '100%',
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    grid: {
      padding: { top: 0, right: 10, bottom: 0, left: 10 },
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      show: false,
      categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      axisTicks: { height: 0 },
      axisBorder: {
        color: GRAY_COLOR,
        opacity: 1,
      },
      labels: {
        style: {
          colors: GRAY_COLOR,
          fontSize: 12,
        },
      },
    },
    yaxis: { show: false },
    tooltip: {
      enabled: true,
      enabledOnSeries: false,
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
      marker: { show: false },
    },
  }

  // 지역별 AS 현황
  const asLocateBarOptions = {
    series: [
      { name: '누적', data: [65, 89, 192, 144, 74] },
      { name: '진행', data: [122, 192, 144, 122, 34] },
      { name: '지연', data: [89, 144, 122, 192, 94] },
      { name: '완료', data: [144, 122, 89, 89, 56] },
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
      categories: ['전체', '수도권', '경상도', '전라도', '충청/강원'],
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

  // 메인 유형별 AS 현황
  const asMainCaseBarOptions = {
    series: [
      { name: '누적', data: [78, 23, 65, 89, 192, 144, 74] },
      { name: '진행', data: [82, 17, 122, 192, 144, 122, 34] },
      { name: '지연', data: [25, 46, 89, 144, 122, 192, 94] },
      { name: '완료', data: [34, 79, 144, 122, 89, 89, 56] },
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
      categories: ['H/W', 'S/W', 'OS', 'NW', '요청사항', '설정문제', '타사제품'],
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

  // 상세 유형별 AS 접수 건수
  const asDetailCasePieOptions = {
    series: [20, 65, 20, 34],
    labels: ['VMS', 'Web service', '모바일 APP', '지능형영상 분석시스템'],
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
      horizontalAlign: 'center',
      showForSingleSeries: true,
      fontSize: LEGEND_FONT_SIZE,
      color: GRAY_COLOR,
      itemMargin: { horizontal: 8 },
      markers: { size: 5, strokeWidth: 1, offsetX: -3, shape: 'circle' },
    },
  }

  // 담당자별 AS 현황
  const asManagerBarChartOptions = {
    series: [
      { name: 'H/W', data: [78, 23, 65, 89, 192, 144, 74, 82, 17, 122, 192, 144, 122, 34, 192, 144, 74, 82, 17, 12] },
      { name: 'S/W', data: [82, 17, 122, 192, 144, 122, 34, 25, 46, 89, 144, 122, 192, 94, 34, 25, 122, 34, 25, 32] },
      { name: 'OS', data: [25, 46, 89, 144, 122, 192, 94, 34, 79, 144, 122, 89, 89, 56, 94, 34, 89, 89, 56, 189] },
      { name: 'NW', data: [34, 79, 144, 122, 89, 89, 56, 122, 192, 94, 34, 79, 144, 122, 89, 89, 74, 34, 79, 45] },
      {
        name: '요청사항',
        data: [78, 23, 65, 89, 192, 144, 74, 34, 79, 144, 122, 89, 89, 56, 34, 79, 17, 122, 192, 83],
      },
    ],
    colors: COLORS,
    chart: {
      height: '100%',
      type: 'bar',
      stacked: true,
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
        borderRadius: 4,
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
        '홍길동1',
        '홍길동2',
        '홍길동3',
        '홍길동4',
        '홍길동5',
        '홍길동6',
        '홍길동7',
        '홍길동8',
        '홍길동9',
        '홍길동10',
        '홍길동11',
        '홍길동12',
        '홍길동13',
        '홍길동14',
        '홍길동15',
        '홍길동16',
        '홍길동17',
        '홍길동18',
        '홍길동19',
        '홍길동20',
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

  const asTotalLine = new ApexCharts(document.querySelector('#asTotalChart_LINE'), asTotalLineOptions)
  const asProgressLine = new ApexCharts(document.querySelector('#asProgressChart_LINE'), asTotalLineOptions)
  const asDelayLine = new ApexCharts(document.querySelector('#asDelayChart_LINE'), asTotalLineOptions)
  const asComplateLine = new ApexCharts(document.querySelector('#asComplateChart_LINE'), asTotalLineOptions)
  const asLocateBar = new ApexCharts(document.querySelector('#asLocateChart_BAR'), asLocateBarOptions)
  const asMainCaseBar = new ApexCharts(document.querySelector('#asMainCaseChart_BAR'), asMainCaseBarOptions)
  const asDetailCasePie = new ApexCharts(document.querySelector('#asDetailCaseChart_PIE'), asDetailCasePieOptions)
  const asManagerBar = new ApexCharts(document.querySelector('#asManagerChart_BAR'), asManagerBarChartOptions)

  asTotalLine.render()
  asProgressLine.render()
  asDelayLine.render()
  asComplateLine.render()
  asLocateBar.render()
  asMainCaseBar.render()
  asDetailCasePie.render()
  asManagerBar.render()
})
