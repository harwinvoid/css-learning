window.onload = function () {
  var clock = document.querySelector('#clock'),
      context = clock.getContext('2d'),
      centerX = clock.width / 2,
      centerY = clock.height /2,
      rad = Math.PI * 2 / 60;
  console.log(clock)
  function drawCircle () {
    context.save()
     context.beginPath()
    context.strokeStyle = 'black'
    context.lineWidth = 1
    context.arc(centerX, centerY, 70, 0, 2 * Math.PI)
    context.stroke()
    context.closePath()
  }
  function drawRad(len,rad){
    context.save()
    context.strokeStyle = 'black'
    context.lineWidth = 0.5
    for (var i = 1; i <= 2 * rad; i++){
      context.beginPath()
      var fromX = centerX + Math.sin(i * (Math.PI / rad)) * 70,
          fromY = centerY - Math.cos(i * (Math.PI / rad)) * 70,
          toX = centerX + Math.sin(i * (Math.PI / rad)) * (70 - len),
          toY = centerY - Math.cos(i * (Math.PI / rad)) * (70 - len)
      context.moveTo(fromX, fromY)
      context.lineTo(toX, toY)
      context.stroke()
    }
    context.closePath()
  }
  function drawLine (len,Number, rad){
    context.save()
    var toX = centerX + len * Math.cos(Number / rad * Math.PI),
        toY = centerY - len * Math.sin(Number / rad * Math.PI)
    console.log(toX, toY)
    context.moveTo(centerX,centerY)
    context.lineTo(toX, toY)
    context.stroke()
  }
  (function start () {
    window.requestAnimationFrame(start, clock)
     context.clearRect(0, 0, clock.width, clock.height)
     drawCircle()
     drawRad(15,6)
     drawRad(5,30)
     var date = new Date()
     var minute = date.getMinutes()
     var hour = date.getHours()
     drawLine(50, minute , 30)
     drawLine(30, hour - 12 > 0 ? hour -12 : hour, 6)

  } ())      
}