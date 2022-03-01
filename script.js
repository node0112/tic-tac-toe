const xBtn=document.querySelector('.x')
const oBtn=document.querySelector('.o')
const themeSwitch=document.querySelector('.theme-switch')
const computerBtn=document.querySelector('.computer-container')
const cardsContainer=document.querySelector('.player-card-container')
const sidebar=document.querySelector('.sidebar')
const btns=document.querySelector('.btn')
const humanBtn=document.querySelector('.human-container')
const player2img=document.querySelector('.player2-image')
const player2Token=document.querySelector(".player2-token")
const player2Header=document.querySelector('.player2')
const player2Name=document.querySelector('.player2name')
const headerToken=document.querySelector('.header-token')
const startContainer=document.querySelector('.start-container')
const startBtn=document.querySelector(".start")
let input=document.querySelectorAll('input')
let gridID
let theme="light"
let player2
let tokenSelection=""
let opponentToken=""
let playerSelector=""
let clicks=0
let selected=false
let condition
let field=document.querySelector('.player1-name')
let inputCondition
let color,color2
let buttoncolor="black"
let selection
let button,button2
let textColor="white"

themeSwitch.addEventListener('click', ()=>{
    themeSwitcher()})
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
    button=oBtn
    button2=xBtn
    color="plum"
    color2="rgb(66, 143, 179)"
    selection=tokenSelection
    buttonAnimationMouseOut(button,button2,color,color2,selection)
})


xBtn.addEventListener('click', ()=>{
    clicks=1
    tokenSelection="x"
    selected=true
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
    player2Token.style.backgroundColor=buttoncolor
    player2Token.style.color="yellowgreen"
    player2Token.textContent="O"
    headerToken.style.transition="all 1s"
    headerToken.style.backgroundColor="black"
    headerToken.style.color="yellowgreen"
    headerToken.textContent="O"
    xBtn.style.boxShadow="0 0 30px  yellowgreen"
    xBtn.style.transition="all 0.8s"
    xBtn.style.backgroundColor=buttoncolor
    xBtn.style.color="yellowgreen"
    xBtn.style.boxShadow="0 0 30px  yellowgreen"
    oBtn.style.backgroundColor="plum"
    oBtn.style.boxShadow="none"
    oBtn.style.color="black"
    }, 300);
    
})
oBtn.addEventListener('click', ()=>{
    clicks=1
    tokenSelection="o"
    selected=true
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
    player2Token.style.backgroundColor=buttoncolor
    player2Token.style.color="yellowgreen"
    player2Token.textContent="X"
    headerToken.style.transition="all 1s"
    headerToken.style.backgroundColor="black"
    headerToken.style.color="yellowgreen"
    headerToken.textContent="X"
    oBtn.style.transition="all 0.8s"
    oBtn.style.boxShadow="0 0 25px  yellowgreen"
    oBtn.style.backgroundColor=buttoncolor
    oBtn.style.color="yellowgreen"
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
    button=humanBtn
    button2=computerBtn
    selection=playerSelector
    buttonAnimationMouseOver(button,button2,color,color2,selection)
})
humanBtn.addEventListener('mouseout', ()=>{
    color="rgb(212, 69, 69)"
    color2="rgb(221, 178, 84)"
    button=humanBtn
    button2=computerBtn
    selection=playerSelector
    buttonAnimationMouseOut(button,button2,color,color2,selection)
})
computerBtn.addEventListener('mouseover', ()=>{
    color2="rgb(212, 69, 69)"
    color="rgb(221, 178, 84)"
    button2=humanBtn
    button=computerBtn
    selection=playerSelector
    buttonAnimationMouseOver(button,button2,color,color2,selection)
})
computerBtn.addEventListener('mouseout', ()=>{
    color2="rgb(212, 69, 69)"
    color="rgb(221, 178, 84)"
    button2=humanBtn
    button=computerBtn
    selection=playerSelector
    buttonAnimationMouseOut(button,button2,color,color2,selection)
})


humanBtn.addEventListener('click', ()=>{
    field=document.querySelector('.player1-name')
    checkvalue(field)
    if(condition==true){
    playerSelector="human"
    player2="human"
    startAnimation()
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
    humanBtn.style.backgroundColor=buttoncolor
    humanBtn.style.color="yellowgreen"
    selected=true
    computerBtn.style.backgroundColor="rgb(221, 178, 84)"
    computerBtn.style.boxShadow="none"
    computerBtn.style.color="black"
    }, 300);
}
else{
    alert("Make Sure You Have Chosen and Filled Every Value for Player 1!")
}
})
computerBtn.addEventListener('click', ()=>{
    checkvalue(field)
    if(condition==true){
    startAnimation()
    playerSelector="computer"
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
    computerBtn.style.backgroundColor=buttoncolor
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
    startBtn.style.backgroundColor=buttoncolor
    startBtn.style.color="yellowgreen"
})

startAnimation()
startBtn.addEventListener('click', ()=>{
    clearScreen()
    playerSelector="human"
    player2="human"
    player2Token.textContent="o"
    tokenSelection="x"
    /*
    if(playerSelector=="human"){
        field=player2Name
        checkvalue(field)
        if(condition==true){
            clearScreen()
        }
        else{
            alert("Make Sure You Have Chosen and Filled Every Value for Player 1!") 
        }
    }
    else{
        clearScreen()
    }
    */
})

/* Set the width of the side navigation to 250px */
function openNav() {
    document.querySelector(".sidenav").style.width = "20%";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.querySelector(".sidenav").style.width = "0";
  }
//////////////////////////////////START SCREEN FUNCTIONS HERE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

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
        startContainer.style.backgroundColor=textColor
        startBtn.style.backgroundColor=buttoncolor
        startBtn.style.boxShadow="0 0 30px yellowgreen"
        startBtn.style.color="yellowgreen"
    }, 600);
}

function buttonAnimationMouseOver(button,button2,color,color2,selection){
    button.style.backgroundColor=buttoncolor
    button.style.color=textColor
    button.style.width="70%"
    if(selection=="o" || selection=="computer"){
        button2.style.backgroundColor=color2
        button2.style.color="black"
    }
    else if(selection=="x" && button==oBtn|| selection=="human"){
        button2.style.backgroundColor=color2
        button2.style.color="black"
        button.style.backgroundColor=buttoncolor
        button.style.color=textColor
        }
}

function buttonAnimationMouseOut(button,button2,color,color2,selection,){
    button.style.width="50%"
    if(selected==false ||  selection==""){
        button.style.color="black"
        button.style.backgroundColor=color
    }
    if(selection=="o" && button==xBtn|| selection=="computer" && button==humanBtn){
        button2.style.backgroundColor=buttoncolor
        button2.style.color="yellowgreen"
        button.style.backgroundColor=color
        button.style.color=buttoncolor
        }
    if(selection=="x" && button==oBtn|| selection=="human" && button==computerBtn){
        button2.style.backgroundColor=buttoncolor
        button2.style.color="yellowgreen"
        button.style.backgroundColor=color
        button.style.color="black"
        }
}
function buttonColorChange(buttoncolor){
    if(playerSelector=="human" || playerSelector=="computer" || tokenSelection=="x" || tokenSelection=="y"){
        if(playerSelector=="human"){
            humanBtn.style.backgroundColor="white"
        }
        if(playerSelector=="computer"){
            computerBtn.style.backgroundColor="white"
        }
        if(tokenSelection=="x"){
            xBtn.style.backgroundColor=="white"
        }
    }
}

let buttoncondition

function buttonCheck(){
    if(tokenSelection=="x"){
        window.b1=xBtn
    }
    else if(tokenSelection=="o"){
        window.b1=oBtn
    }
    if(playerSelector=="human"){
       window.b2=humanBtn
    }
    else if(playerSelector=="computer"){
       window.b2=computerBtn
    }
    else{
       buttoncondition=false
    }
}

function themeSwitcher(){//dark or light theme
    const image1=document.querySelector('.player1-image')
    const image2=document.querySelector('.player2-image')
    let items=document.querySelectorAll('.grid-item')
    if(theme=="light"){
        items.forEach(item=>{
            item.style.borderColor="white"
            if(item.style.color!="yellowgreen"){
            item.style.color="white"
            }
        })
        theme="dark"
        textColor="black"
        buttoncolor="white"
        startContainer.style.backgroundColor="black"
        startBtn.style.backgroundColor="white"
        sidebar.style.backgroundColor="white"
        document.querySelector('.logo').style.backgroundColor="white"
        document.querySelector('.sidenav').style.backgroundColor="white"
        document.querySelector('.sidebar-footer').style.color="black"
        cardsContainer.style.backgroundColor="black"
        image1.style.backgroundColor="white"
        image2.style.backgroundColor="white"
        player2Token.style.backgroundColor="white"
        document.querySelector(".content-wrapper").style.backgroundColor="black"
        document.querySelector(".footer").style.backgroundColor="black"
        document.querySelector(".footer").style.color="white"
        document.querySelector(".header").style.backgroundColor="black"
        themeSwitch.style.color="white"
        buttonCheck()
        if(buttoncondition != false){
        b1.style.backgroundColor="white"
        b2.style.backgroundColor="white"
        }
    }
    else if(theme=="dark"){
        items.forEach(item=>{
            item.style.borderColor="black"
            if(item.style.color!="yellowgreen"){
            item.style.color="black"
            }
        })
        theme="light"
        textColor="white"
        buttoncolor="black"
        startContainer.style.backgroundColor="white"
        startBtn.style.backgroundColor="black"
        startContainer.style.color=="white"
        sidebar.style.backgroundColor="rgb(39, 38, 38)"
        document.querySelector('.logo').style.backgroundColor="rgb(39, 38, 38)"
        document.querySelector('.sidenav').style.backgroundColor="black"
        document.querySelector('.sidebar-footer').style.color="white"
        cardsContainer.style.backgroundColor="white"
        image1.style.backgroundColor="black"
        image2.style.backgroundColor="black"
        player2Token.style.backgroundColor="black"
        document.querySelector(".content-wrapper").style.backgroundColor="white"
        document.querySelector(".footer").style.backgroundColor="white"
        document.querySelector(".footer").style.color="black"
        document.querySelector(".header").style.backgroundColor="white"
        themeSwitch.style.color="black"
        buttonCheck()
        if(buttoncondition != false){
        b1.style.backgroundColor="black"
        b2.style.backgroundColor="black"
        }
    }
}
function fadeScreen(element){
      element.style.opacity="0"
}

/////////////////////GAME FUNCTIONS HERE\\\\\\\\\\\\\\\\\\\\\\\\
let players= [];
let player
const grids=document.querySelector('.grids')

function Player(playername,token,score){
    return {name: playername, token: token, score:score }
}
function infoCapture(){
    let player1name="Bot 1"
    let player2_Name="sid"
    let score=0
    player = new Player(player1name,"o",score)
    playerToArray(player)
    player = new Player(player2_Name,"x",score)
    playerToArray(player)
    /*
    let player1name=document.querySelector('.player1-name').value
    let player2_Name
    let score=0
    if(player2=="human"){
        player2_Name=document.querySelector('.player2name').value
    }
    else if(player2=="computer"){
        player2_name="computer"
    }
    player = new Player(player1name,tokenSelection,score)
    playerToArray(player)
    player = new Player(player2_Name,player2Token.textContent,score)
    playerToArray(player)*/
}
function playerToArray(player){
    players.push(player)
}

function clearScreen(){
    infoCapture()
        console.log(players)
        const playerContainer=document.querySelector('.player-card-container')
        playerContainer.style.opacity="0"
        document.querySelector('.footer').style.opacity="0"
        sidebar.classList.remove('hidden')
        setTimeout(() => {
            document.querySelector('.footer').classList.add('hidden')
            document.querySelector('.game-container').classList.remove('hidden')
            playerContainer.classList.add('hidden')
            document.querySelector('.content-wrapper').style.justifyContent="flex-start"
            document.querySelector('.footer').classList.add('.hidden')
            sidebar.style.width="25%"
            btns.style.width="auto"
            btns.style.opacity="1"
            sidebar.style.opacity="1"
            grids.style.opacity="1"
            document.querySelector('.logo').style.backgroundColor="rgb(39, 38, 38)"
            makeGrid()
            gridShadowIn()
            gridShadowOut()
            gridTokenSelector(0)
        }, 1000);
}

function makeGrid(){
    grids.style.setProperty('--grid-rows',3)
    grids.style.setProperty('--grid-columns',3)
    for (let i = 0; i <= (3 * 3); i++) { //makes tic tac style grid
        let items = document.querySelectorAll('.grid-item');
          let cell = document.createElement("div");
            items.forEach(item => {
                if(i==1){
              cell.style.borderRight = "3px solid black";
              cell.style.borderLeft="3px solid black"
                }
               else if(i==4){ 
              cell.style.borderRight = "3px solid black";
              cell.style.borderBottom = "3px solid black";
              cell.style.borderTop= "3px solid black";
              cell.style.borderLeft="3px solid black"
                }
                else if (i==3 || i==5){
                    cell.style.borderTop="3px solid black"
                    cell.style.borderBottom="3px solid black"
                }
                else if(i==7){
                  cell.style.borderLeft="3px solid black"
                  cell.style.borderRight="3px solid black"
                }
          })
  
        cell.classList.add('grid-item');
        grids.appendChild(cell);
        };
}
function gridShadowIn() {
    let i=1
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.setAttribute('id',i)
        i++
      item.addEventListener('mouseover', () => {
          if(item.textContent=="" && win==false){
        item.style.boxShadow = "0 0 20px yellowgreen";
          }
          else{
            item.style.boxShadow = "0 0 20px tomato";
          }
      });
    });
  }
function gridShadowOut() {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
      item.addEventListener('mouseout', () => {
        item.style.boxShadow = "none";
      });
    });
  }


 

let tokenPlace
function gridTokenCreator(token) {
    for(i=1;i<=9;i++){
        tokenPlace=token
        let item=document.getElementById(i)
        item.addEventListener('click',()=>{
            gridID=item.id
            gridPlace(gridID)
        })
    }
  }
function gridPlace(gridID){
    item=document.getElementById(gridID)
    if(item.textContent=="" &&win==false){
        item.textContent=tokenPlace
        if(playerSelector=="human"){
        if(tokenPlace=="x"){
            gameboardCreator(gridID,tokenPlace)
            gridTokenCreator(tokenPlace="o")
            winCheck()
        }
        else if(tokenPlace=="o"){
            gameboardCreator(gridID,tokenPlace)
            gridTokenCreator(tokenPlace="x")
            winCheck()
        }
    }
}
item.removeEventListener('click',gridPlace)
}

let win=false
function winCheck(){
   let n=gameBoard
   let token
   if(tokenPlace=="x"){
       token="o"
   }
   else{
       token="x"
   }
   let score1=document.querySelector('.score1')
   let score2=document.querySelector('.score2')
   ///////Horizontal Check\\\\\\\\
   if(n[0]==token && n[1]==token &&n[2]==token &&win==false ){
     document.getElementById(1).style.color="yellowgreen"
     document.getElementById(2).style.color="yellowgreen"
     document.getElementById(3).style.color="yellowgreen"
     scoreUpdate(score1,score2,token)
     win=true
   }
   if(n[3]==token && n[4]==token &&n[5]==token  &&win==false){
    document.getElementById(4).style.color="yellowgreen"
    document.getElementById(5).style.color="yellowgreen"
    document.getElementById(6).style.color="yellowgreen"
    scoreUpdate(score1,score2,token)
    win=true
   }
   if(n[6]==token && n[7]==token &&n[8]==token &&win==false ){
    document.getElementById(7).style.color="yellowgreen"
     document.getElementById(8).style.color="yellowgreen"
     document.getElementById(9).style.color="yellowgreen"
     scoreUpdate(score1,score2,token)
     win=true
   }
   ////////Vertical check\\\\\\\\
   if(n[0]==token && n[3]==token &&n[6]==token &&win==false ){
    document.getElementById(1).style.color="yellowgreen"
    document.getElementById(4).style.color="yellowgreen"
    document.getElementById(7).style.color="yellowgreen"
    scoreUpdate(score1,score2,token)
    win=true
  }
  if(n[1]==token && n[4]==token &&n[7]==token  &&win==false){
   document.getElementById(2).style.color="yellowgreen"
   document.getElementById(5).style.color="yellowgreen"
   document.getElementById(8).style.color="yellowgreen"
   scoreUpdate(score1,score2,token)
   win=true
  }
  if(n[2]==token && n[5]==token &&n[8]==token &&win==false ){
   document.getElementById(3).style.color="yellowgreen"
    document.getElementById(6).style.color="yellowgreen"
    document.getElementById(9).style.color="yellowgreen"
    scoreUpdate(score1,score2,token)
    win=true
  }
   ///////Diagonal Check\\\\\\\\\
   if(n[0]==token && n[4]==token &&n[8]==token){
    document.getElementById(1).style.color="yellowgreen"
    document.getElementById(5).style.color="yellowgreen"
    document.getElementById(9).style.color="yellowgreen"
    scoreUpdate(score1,score2,token)
    win=true 
   }
   if(n[2]==token && n[4]==token &&n[6]==token){
    document.getElementById(3).style.color="yellowgreen"
    document.getElementById(5).style.color="yellowgreen"
    document.getElementById(9).style.color="yellowgreen"
    scoreUpdate(score1,score2,token)
    win=true 
   }

}

function scoreUpdate(score1,score2,token){
    if(players[0].token==token){
        players[0].score=parseInt(players[0].score)+1
        score1.textContent=players[0].score
    }
    else{
        players[1].score=players[1].score+1
        score2.textContent=players[1].score
    }
}
function gridTokenSelector(player){
      if(players[player].token=="x"){
         gridTokenCreator("x")
      }
      else if(players[player].token=="o"){//change color on scoreboard and token
          gridTokenCreator("o")
      }
  }

  function computerTokenPlace(){//using the minimax algorithm

  }
  function humanTokenPlace(){
      gridTokenCreator(players[1].token)
  }

  
  var gameBoard = ["","","","","","","","",""]
  

  function gameboardCreator(gridNum,token){
      gameBoard[gridNum-1]=token
      console.log(gameBoard)
  }