const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

startButton.addEventListener('click', changingBackground)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let changeColor = null;

function changingBackground(e) {
  startButton.disabled = true;
  stopButton.disabled = false;
     changeColor = setInterval(()=>{
        document.body.style.backgroundColor = getRandomHexColor()
    }, 1000)
}

stopButton.addEventListener('click', () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(changeColor)});
