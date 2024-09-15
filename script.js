const submit = document.querySelector('#submit')
const output = document.querySelector('#output')
const guessDisplay = document.querySelector('#guessDisplay')
const input = document.querySelector('#input')
const form = document.querySelector('form')
const startbtn = document.querySelector('#startGame')
const AllGuessArray = []

let ComputerRandom = Math.round(Math.random() * 100)

form.addEventListener('submit',(e)=> {
  
  e.preventDefault()

  const userInput =parseInt( input.value)

  if(userInput < ComputerRandom){
    // console.log('Too Low!!')
    output.innerText = 'Too Low 🙅🏽‍♂️'
  }
  else if(userInput > ComputerRandom){
    // console.log('Too High!!')
    output.innerText = 'Too High 👷🏽‍♂️'
  }
  else{
    // console.log('Congrats'); 
    output.innerText = 'Congrats 💪'
    submit.disabled = true
    startbtn.disabled = false
  }

  AllGuessArray.push(userInput)
  guessDisplay.innerText = 'You Guess: ' + AllGuessArray.join(',')
  form.reset()

  
})

startbtn.addEventListener('click',()=>{
  output.innerText = ''
  submit.disabled = false
  startbtn.disabled = true
  guessDisplay.innerText = ''
  ComputerRandom = Math.round(Math.random() * 100)

})