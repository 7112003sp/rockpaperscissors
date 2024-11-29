let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userpara=document.querySelector("#user-score")
const comppara=document.querySelector("#comp-score");


const compchoice=()=>{
    const options=["rock","papers","scissors"];
    const optionsindex= Math.floor(Math.random()*3);
    return options[optionsindex];


}
const drawgame=()=>{
    console.log("draw game was drawn");
    msg.innerText="GAME WAS DRAWN";
    msg.style.backgroundColor="white";
};
const showwinner=(userwin,selectcompscore,choiceid)=>{
    if(userwin===true){
        userscore++;
        userpara.innerText=userscore;
        console.log(`you win Your ${choiceid} beats ${selectcompscore}`)
        msg.innerText=`You win Your ${choiceid} Beats AI ${selectcompscore}`;
        msg.style.backgroundColor="yellow";
    }else{
        compscore++
        comppara.innerText=compscore;
        console.log("you lose");
        msg.innerText=`You Loss AI ${selectcompscore} Beats Your${choiceid}`
        msg.style.backgroundColor="red";
    }
};
const playgame=(choiceid)=>{
    console.log("choiceid=",choiceid);

    selectcompscore=compchoice();
    console.log("compscore=",selectcompscore)
    if(choiceid===selectcompscore){
        drawgame();
    }else{
        let userwin=true;
        if(choiceid==="rock"){
           userwin= selectcompscore==="papers"? false:true; 
        }else if(choiceid==="papers"){
            userwin=selectcompscore==="scissors"?false:true;
        }else{
            userwin=selectcompscore==="rock"?false:true;
        }
        showwinner(userwin,selectcompscore,choiceid)
        
    }}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const choiceid= choice.getAttribute("id");
    // console.log("choice was clicked",choiceid);
        playgame(choiceid);
    })
})