const slider = document.querySelector('.custom-slider')
const sliderFill = document.querySelector('.fill')
const timeLeftText = document.querySelector('#time-left')
const message = document.querySelector('#message')
const body = document.querySelector('body')
const birthdayButton = document.querySelector('#bdbutton')



const careful = document.createElement('style')
careful.innerHTML = 
    `
    body
    {
        margin: 0;
    padding: 0;
    background: radial-gradient(
        circle,
        rgb(171, 171, 30) 0%,
        rgb(243, 219, 8) 40%,
        rgb(0, 0, 0) 100%
    );
    height: 100vh;
    width: 100vw;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;   
    `

const warning = document.createElement('style')
warning.innerHTML = 
    `
    body
    {
        margin: 0;
    padding: 0;
    background: radial-gradient(
        circle,
        rgb(222, 155, 0) 0%,
        rgb(222, 155, 55) 40%,
        rgb(0, 0, 0) 100%
    );
    height: 100vh;
    width: 100vw;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    `

const danger = document.createElement('style')
danger.innerHTML =
    `
    body
    {
        margin: 0;
    padding: 0;
    background: radial-gradient(
        circle,
        rgb(0, 0, 0) 0%,
        rgb(159, 43, 43) 40%,
        rgb(0, 0, 0) 100%
    );
    height: 100vh;
    width: 100vw;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    `
const boo = document.createElement('style')
boo.innerHTML =
    `
    body
    {
    margin: 0;
    padding: 0;
    background: rgb(0, 0, 0);
    height: 100vh;
    width: 100vw;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    `
const halo = document.createElement('style')
halo.innerHTML =
    `
    body
    {
    margin: 0;
    padding: 0;
    background: radial-gradient(
        circle,
        rgb(91, 91, 125) 0%,
        rgb(159, 43, 43) 40%,
        rgb(255, 255, 255) 100%
    );
    height: 100vh;
    width: 100vw;
    color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    `


const startCount = 3
let timeLeft = startCount

const timerId = setInterval(() => 
{
  timeLeft--
  timeLeftText.textContent = timeLeft
  sliderFill.style.width = (timeLeft /startCount) * 100 + '%'
    
// change the color of the text to yellow when there are 7 seconds left
    if (timeLeft <= 8) 
    {
        timeLeftText.style.color = 'yellow'
        sliderFill.style.backgroundColor = 'yellow' 
        sliderFill.style.boxShadow = '0 0 10px yellow' 
        document.body.appendChild(careful)
    } 
    
    // change the color of the text to orange when there are 30 seconds left
    if (timeLeft <= 6) 
    {
        timeLeftText.style.color = 'rgb(198, 81, 2)'
        sliderFill.style.backgroundColor = 'rgb(198, 81, 2)' 
        sliderFill.style.boxShadow = 'rgb(198, 81, 2)' 
        document.body.appendChild(warning)
    } 
    
    // change the color of the text to red when there are 10 seconds left
    if (timeLeft <= 4) 
    {
        timeLeftText.style.color = 'red'
        sliderFill.style.backgroundColor = 'rgb(159, 43, 43)'
        sliderFill.style.boxShadow = '0 0 30px red'
        document.body.appendChild(danger)
    }

    if (timeLeft <= 0)
    {
        document.body.appendChild(boo)
        message.style.color = 'rgb(0, 0, 0)'
        
        // 3 second delay before the confetti appears
        setTimeout(() =>
        {
            surprise()
            timeLeftText.textContent = 'Happy Birthday AK'
            message.textContent = 'Have the best day today!'
            timeLeftText.style.color = 'white'
            message.style.color = 'white'
        }, 3000)
        
        clearInterval(timerId)

        // remove the slider
        slider.remove()
        sliderFill.remove()

        setTimeout(() =>
        {
            document.body.appendChild(halo)
            timeLeftText.textContent = 'But wait, there\'s more!'
            message.remove()
            birthdayButton.innerHTML = '<button><a href="https://youtu.be/Qwscb3QIVSg?t=227" target="_blank">🥳🎉</a></button>'
        }, 10000)
    
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
    for (let i = 0; i < 600; i++) 
    {
        setTimeout(() =>
        {
//create the circle element
        const circleElement = document.createElement('div')
            circleElement.classList.add('heart')

// randomize the position, and color of the confetti element
        circleElement.style.left = Math.floor(Math.random() * 100) + '%'
        circleElement.style.top = Math.floor(Math.random() * 100) + '%'
            circleElement.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
            
// adds the circle element to the page, using absolute positioning        
            timeLeftText.append(circleElement)    
      }, i * 5)
    }
}
