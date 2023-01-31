const sliderFill = document.querySelector('.fill')
const timeLeftText = document.querySelector('#time-left')
// const body = document.querySelector('.body')
const startCount = 10
let timeLeft = startCount

const timerId = setInterval(() => {
  console.log(timeLeft)
  timeLeft--
  timeLeftText.textContent = timeLeft
  sliderFill.style.width = (timeLeft /startCount) * 100 + '%'
    
// change the color of the text to yellow when there are 7 seconds left
    if (timeLeft <= 7) {
        timeLeftText.style.color = 'yellow'
        sliderFill.style.backgroundColor = 'yellow' 
        sliderFill.style.boxShadow = '0 0 10px yellow' 
        // body.style.backgroundColor = 'yellow'
    }
  
// change the color of the text to red when there are 5 seconds left
    if (timeLeft <= 3) {
        timeLeftText.style.color = 'red'
        sliderFill.style.backgroundColor = 'red'
        sliderFill.style.boxShadow = '0 0 10px red'
    }

    if (timeLeft <= 0)
    {
        clearInterval(timerId)
        timeLeftText.textContent = 'FIN!'
        surprise()
    }

}, 1000)

// function to create confetti
function surprise()
{
// colors for confetti    
    const colors = [
      'rgba(255, 105, 97, 0.5)',
      'rgba(97, 168, 255, 0.5)',
      'rgba(247, 255, 97, 0.5)',
      'rgba(97, 255, 184, 0.5)',
      'rgba(255, 255, 255, 0.5)'
    ]
// call the function 500 times for pieces of confetti
    for (let i = 0; i < 500; i++) {
        setTimeout(() =>
        {
//create the circle element
        const circleElement = document.createElement('div')
            circleElement.classList.add('circle')
// randomize the position, and color of the confetti element
        circleElement.style.left = Math.floor(Math.random() * 100) + '%'
        circleElement.style.top = Math.floor(Math.random() * 100) + '%'
        circleElement.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
// adds the circle element to the page, using absolute positioning        
        timeLeftText.append(circleElement)
      }, i * 5)
    }
  }