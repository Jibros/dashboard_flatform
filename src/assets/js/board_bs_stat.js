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

  // BS 진행 / 자체처리 / 이슈 접수 건
  const bsStateChartOptions = {
    series: [
      { name: 'BS 진행', data: [{ x: 'BS 진행', y: 12 }] },
      { name: '자체처리', data: [{ x: '자체처리', y: 10 }] },
      { name: '이슈접수', data: [{ x: '이슈접수', y: 2 }] },
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
        horizontal: true,
        barHeight: '80%',
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
      itemMargin: { horizontal: 8 },
      markers: { size: 5, strokeWidth: 1, offsetX: -3, shape: 'circle' },
    },
    xaxis: {
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
      theme: 'light',
      shared: true,
      intersect: false,
      x: { show: true },
      y: {
        formatter: function (val) {
          return +val + '건'
        },
      },
      style: {
        fontSize: 12,
      },
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

  // 이슈접수 후 완료 건
  const issueCompChartOptions = {
    series: [3, 10],
    labels: ['이슈 접수', '이슈 완료'],
    colors: COLORS,
    chart: {
      height: '100%',
      type: 'pie',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    pie: {
      startAngle: 0,
      endAngle: -270,
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
  }

  // 지역별 BS현황 / 자체처리 /이슈 접수 건
  const locateChartOptions = {
    series: [
      { name: 'BS 진행', data: [10, 11, 12, 13, 14, 15, 16, 17, 6] },
      { name: '자체처리', data: [4, 5, 6, 2, 7, 8, 4, 3, 9] },
      { name: '이슈 접수', data: [3, 8, 3, 7, 8, 3, 3, 8, 6] },
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
        barHeight: '80%',
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
      categories: ['서울/인천', '경기남부', '경기북부', '경상남도', '경상북도', '전라남도', '전라북도', '충청/강원'],
      tickPlacement: 'on',
      axisTicks: {
        height: 0,
      },
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
      tooltip: {
        enabled: true,
      },
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
      style: {
        fontSize: 12,
      },
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

  // 유형별 BS현황 / 자체처리 /이슈 접수 건
  const caseChartOptions = {
    series: [
      { name: 'BS 진행', data: [10, 11, 12, 13, 14] },
      { name: '자체처리', data: [4, 5, 6, 2, 7] },
      { name: '이슈 접수', data: [3, 8, 3, 7, 8] },
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
        barHeight: '80%',
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
      axisTicks: {
        height: 0,
      },
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
      tooltip: {
        enabled: true,
      },
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
      style: {
        fontSize: 12,
      },
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

  // 이슈 접수 건 대비 처리 완료 현황
  const issueChartOptions = {
    series: [
      { name: 'BS 진행', data: [14, 15, 16, 17, 6] },
      { name: '자체처리', data: [7, 8, 4, 3, 9] },
      { name: '이슈 접수', data: [8, 3, 3, 8, 6] },
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
        barHeight: '80%',
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
      axisTicks: {
        height: 0,
      },
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
      tooltip: {
        enabled: true,
      },
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
      style: {
        fontSize: 12,
      },
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

  // BS 진행 상태 차트
  const bsStateChart = new ApexCharts(document.querySelector('#bsStateChart'), bsStateChartOptions)
  // 이슈접수 후 완료 건
  const issueCompChart = new ApexCharts(document.querySelector('#issueCompChart'), issueCompChartOptions)
  // 지역별 BS현황 / 자체처리 /이슈 접수 건
  const locateChart = new ApexCharts(document.querySelector('#locateChart'), locateChartOptions)
  // 유형별 BS현황 / 자체처리 /이슈 접수 건
  const caseChart = new ApexCharts(document.querySelector('#caseChart'), caseChartOptions)
  // 이슈 접수 건 대비 처리 완료 현황
  const issueChart = new ApexCharts(document.querySelector('#issueChart'), issueChartOptions)

  bsStateChart.render()
  issueCompChart.render()
  locateChart.render()
  caseChart.render()
  issueChart.render()
})
