let timer = 0
let interval

const startTimer = () => {
  // If interval is false (falsy )
  if (!interval) {
    // setInterval is a JS function
    interval = setInterval(() => {
      // syntaxtual
      // sugar timer = timer + 1
      timer++
      console.log('heart beat', timer)
      let seconds = timer
      if (timer < 10) {
        seconds = '0' + timer
      }
      document.querySelector('.seconds').textContent = seconds
    }, 1000)
  }
}

const stopTimer = () => {
  // do something
  // check to see if running
  // clearInterval is a sibling to setInterval
  clearInterval(interval)
  console.log(interval)
  interval = null
}

document.querySelector('.start-timer').addEventListener('click', startTimer)
document.querySelector('.stop-timer').addEventListener('click', stopTimer)
