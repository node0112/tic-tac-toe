const xBtn=document.querySelector('.x')
const oBtn=document.querySelector('.o')
const computerBtn=document.querySelector('.computer-container')
const humanBtn=document.querySelector('.human-container')
const player2img=document.querySelector('.player2-image')
const player2Token=document.querySelector(".player2-token")
const player2Header=document.querySelector('.player2')
const player2Name=document.querySelector('.player2name')
const headerToken=document.querySelector('.header-token')
const startContainer=document.querySelector('.start-container')
const startBtn=document.querySelector(".start")
let input=document.querySelectorAll('input')
let theme="light"
let player2
let tokenSelection=""
let opponentToken=""
let playerSelector
let clicks=0
let selected=false
let condition
let field=document.querySelector('.player1-name')
let inputCondition
let color,color2
let selection
let button,button2

xBtn.addEventListener('mouseover', ()=>{
    button=xBtn
    button2=oBtn
    color2="plum"
    color="rgb(66, 143, 179)"
    selection=tokenSelection
    buttonAnimationMouseOver(button,button2,color,color2,selection)
})
xBtn.addEventListener('mouseout', ()=>{
    button=xBtn
    button2=oBtn
    color2="plum"
    color="rgb(66, 143, 179)"
    selection=tokenSelection
    buttonAnimationMouseOut(button,button2,color,color2,selection)
})
oBtn.addEventListener('mouseover', ()=>{
    button=oBtn
    button2=xBtn
    color="plum"
    color2="rgb(66, 143, 179)"
    selection=tokenSelection
    buttonAnimationMouseOver(button,button2,color,color2,selection)
    
})
oBtn.addEventListener('mouseout', ()=>{
    oBtn.style.width="50%"
    if(selected==false || tokenSelection=="x" || tokenSelection==""){
    oBtn.style.backgroundColor="plum"
    oBtn.style.color="black"
    }
    if(tokenSelection=="x"){
        xBtn.style.backgroundColor="black"
        xBtn.style.color="white"
        }
})


xBtn.addEventListener('click', ()=>{
    clicks=1
    xBtn.style.transition="all 0.1s"
    xBtn.style.backgroundColor="yellowgreen"
    xBtn.style.color="black"
    player2Token.style.transition="all 0.3s"
    player2Token.style.width="100%"
    player2Token.style.backgroundColor="yellowgreen"
    headerToken.style.transition="all 0.3s"
    headerToken.style.width="100%"
    headerToken.style.backgroundColor="yellowgreen"
    setTimeout(() => {
    player2Token.style.transition="all 1s"
    player2Token.style.backgroundColor="black"
    player2Token.style.color="yellowgreen"
    player2Token.textContent="O"
    headerToken.style.transition="all 1s"
    headerToken.style.backgroundColor="black"
    headerToken.style.color="yellowgreen"
    headerToken.textContent="O"
    xBtn.style.boxShadow="0 0 30px  yellowgreen"
    xBtn.style.transition="all 0.8s"
    xBtn.style.backgroundColor="black"
    xBtn.style.color="yellowgreen"
    xBtn.style.boxShadow="0 0 30px  yellowgreen"
    tokenSelection="x"
    selected=true
    oBtn.style.backgroundColor="plum"
    oBtn.style.boxShadow="none"
    oBtn.style.color="black"
    }, 300);
    
})
oBtn.addEventListener('click', ()=>{
    clicks=1
    oBtn.style.transition="all 0.1s"
    oBtn.style.backgroundColor="yellowgreen"
    oBtn.style.color="black"
    player2Token.style.width="100%"
    player2Token.style.transition="all 0.3s"
    player2Token.style.backgroundColor="yellowgreen"
    headerToken.style.width="100%"
    headerToken.style.transition="all 0.3s"
    headerToken.style.backgroundColor="yellowgreen"
    setTimeout(() => {
    player2Token.style.transition="all 1s"
    player2Token.style.backgroundColor="black"
    player2Token.style.color="yellowgreen"
    player2Token.textContent="X"
    headerToken.style.transition="all 1s"
    headerToken.style.backgroundColor="black"
    headerToken.style.color="yellowgreen"
    headerToken.textContent="X"
    oBtn.style.transition="all 0.8s"
    oBtn.style.boxShadow="0 0 25px  yellowgreen"
    oBtn.style.backgroundColor="black"
    oBtn.style.color="yellowgreen"
    tokenSelection="o"
    selected=true
    xBtn.style.backgroundColor="rgb(66, 143, 179)"
    xBtn.style.color="black"
    xBtn.style.boxShadow="none"
    }, 300);
})

input.forEach(field =>{
    field.addEventListener('click', ()=>{
        field.value=""
    })
})



//////////////////////////////////////////////////////////////

humanBtn.addEventListener('mouseover', ()=>{
    color="rgb(212, 69, 69)"
    color2="rgb(221, 178, 84)"

    humanBtn.style.backgroundColor="black"
    humanBtn.style.color="white"
    humanBtn.style.width="70%"
    if(playerSelector=="computer"){
        computerBtn.style.backgroundColor="rgb(221, 178, 84)"
        computerBtn.style.color="black"
        }
})
humanBtn.addEventListener('mouseout', ()=>{
    humanBtn.style.width="50%"
    if(selected==false || tokenSelection=="o" || tokenSelection==""){
    humanBtn.style.backgroundColor=" rgb(212, 69, 69)"
    humanBtn.style.color="black"
    }
    if(playerSelector=="computer"){
        computerBtn.style.backgroundColor="black"
        computerBtn.style.color="yellowgreen"
        }
})
computerBtn.addEventListener('mouseover', ()=>{
    computerBtn.style.width="70%"
    computerBtn.style.backgroundColor="black"
    computerBtn.style.color="white"
    if(playerSelector=="human"){
    humanBtn.style.backgroundColor="rgb(212, 69, 69)"
    humanBtn.style.color="black"
    }
    
})
computerBtn.addEventListener('mouseout', ()=>{
    computerBtn.style.width="50%"
    if(selected==false || playerSelector=="human" || playerSelector==""){
    computerBtn.style.backgroundColor="rgb(221, 178, 84)"
    computerBtn.style.color="black"
    }
    if(playerSelector=="human"){
        humanBtn.style.backgroundColor="black"
        humanBtn.style.color="yellowgreen"
        }
})


humanBtn.addEventListener('click', ()=>{
    playerSelector="human"
    field=document.querySelector('.player1-name')
    checkvalue(field)
    if(condition==true){
    player2="human"
    player2Token.classList.add('hidden')
    player2Header.classList.add("hidden")
    headerToken.classList.remove('hidden')
    player2Name.classList.remove("hidden")
    player2Header.style.opacity=""
    humanBtn.style.transition="all 0.1s"
    humanBtn.style.backgroundColor="yellowgreen"
    humanBtn.style.color="black"
    player2img.style.backgroundImage="url(./media/player2_image.gif"
    setTimeout(() => {
    player2Name.opacity="1"
    humanBtn.style.transition="all 0.8s"
    humanBtn.style.backgroundColor="black"
    humanBtn.style.color="yellowgreen"
    selected=true
    computerBtn.style.backgroundColor="rgb(221, 178, 84)"
    computerBtn.style.boxShadow="none"
    computerBtn.style.color="black"
    startContainer.classList.remove('hidden')
    }, 300);
}
else{
    alert("Make Sure You Have Chosen and Filled Every Value for Player 1!")
}
})
computerBtn.addEventListener('click', ()=>{
    playerSelector="computer"
    checkvalue(field)
    if(condition==true){
    startAnimation()
    player2="computer"
    player2Token.classList.remove('hidden')
    player2Header.classList.remove("hidden")
    headerToken.classList.add('hidden')
    player2Name.classList.add("hidden")
    player2Name.value='Your Name?'
    computerBtn.style.transition="all 0.1s"
    computerBtn.style.backgroundColor="yellowgreen"
    computerBtn.style.color="black"
    player2img.style.backgroundImage="url(./media/computer_image.gif"
    setTimeout(() => {
    computerBtn.style.transition="all 0.8s"
    computerBtn.style.backgroundColor="black"
    computerBtn.style.color="yellowgreen"
    selected=true
    humanBtn.style.backgroundColor="rgb(212, 69, 69)"
    humanBtn.style.color="black"
    humanBtn.style.boxShadow="none"
    }, 300);
}
    else{
        alert("Make Sure You Have Chosen and Filled Every Value for Player 1!")
    }
})

startBtn.addEventListener('mouseover', ()=>{
    startBtn.style.fontSize="32px"
    startBtn.style.padding="15px"
    startBtn.style.backgroundColor="yellowgreen"
    startBtn.style.color="black"
})
startBtn.addEventListener('mouseout', ()=>{
    startBtn.style.fontSize="22px"
    startBtn.style.backgroundColor="black"
    startBtn.style.color="yellowgreen"
})


startBtn.addEventListener('click', ()=>{
    field=player2Name
    checkvalue(field)
    if(condition==true){

    }
    else{
        alert("Make Sure You Have Chosen and Filled Every Value for Player 1!") 
    }
})
//////////////////////////////////FUNCTIONS HERE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function checkvalue(field){
        if(field.value=="" || field.value=='Your Name?'){
            inputCondition=false
        }
        else{
            inputCondition=true
        }
    if(inputCondition==true){
    if(clicks==0){
        condition=false
    }
    else{
        condition=true
    }
  }
  else{
      condition=false
  }
  return condition
}

function startAnimation(){
    startBtn.classList.remove('hidden')
    startContainer.classList.remove('hidden')
    startContainer.style.backgroundColor="yellowgreen"
    startBtn.style.backgroundColor="yellowgreen"
    startBtn.style.Color="yellowgreen"
    setTimeout(() => {
        startBtn.style.width="auto"
        startContainer.style.backgroundColor="white"
        startBtn.style.backgroundColor="black"
        startBtn.style.boxShadow="0 0 30px yellowgreen"
        startBtn.style.color="yellowgreen"
    }, 600);
}

function buttonAnimationMouseOver(button,button2,color,color2,selection){
    button.style.backgroundColor="black"
    button.style.color="white"
    button.style.width="70%"
    if(selection=="o" || selection=="computer"){
        button2.style.backgroundColor=color2
        button2.style.color="black"
    }
    else if(selection=="x" || selection=="human"){
        button2.style.backgroundColor=color2
        button2.style.color="black"
    }
}

function buttonAnimationMouseOut(button,button2,color,color2,selection){
    button.style.width="50%"
    if(selected==false || selection=="o" || selection=="" || selection=="computer"){
    button.style.backgroundColor=color
    button.style.color="black"
    }
    if(selection=="o" || selection=="computer"){
        button2.style.backgroundColor="black"
        button2.style.color="yellowgreen"
        }
    if(selection=="x" || selection=="human"){
        button2.style.backgroundColor=color2
        button2.style.color="black"
        }
}
