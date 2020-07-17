var time = prompt('몇초마다 작품을 업데이트할지 정하세요','5')
while(time<5){
  time = prompt('5초 이상만 가능합니다.','5')
}
  function start() {
  $('.editDescriptionBtn').trigger('click')
  $('.editConfirmBtn').trigger('click')
  console.log('작품이 업데이트되었습니다.')
}
alert('avo 매크로가 실행되었습니다.')
start()
setInterval(start, time*1000)