let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");




const gencompchoice=()=>{
    const option=["rock","paper","scissors"];/* random no ma use krne ke liye index ki help se */
   const randid=Math.floor(Math.random()*3);
   return option[randid];
}

const drawgame=()=>{
    console.log("draw game");
    msg.innerText="game was draw play again!";
    msg.style.backgroundColor="black";
}


const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win")
        msg.innerText=`you win.your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else{
        console.log("comp win");
        compscore++
        compscorepara.innerText=compscore;
        msg.innerText=`you lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}


playgame=(userchoice)=>{
    //computer choice
    console.log("user choice",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice",compchoice);
    if(userchoice===compchoice){
          drawgame();
    } else{
      let  userwin=true;
      if(userchoice=="rock"){
      userwin=compchoice==="paper" ? true:false;
    } else if(userchoice==="paper"){
        userwin=compchoice==="scissors" ? true:false;
    } else {
        userwin=compchoice==="rock" ? true:false;
    }
    showwinner(userwin,userchoice,compchoice);
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);


    })
})

