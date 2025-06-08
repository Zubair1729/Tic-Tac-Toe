let msg = document.getElementById("msg");
let boxes = document.querySelectorAll(".box");
let reset=document.querySelector(".btn-game");
let turn = true;
let count=0;
const disableAll=()=>{
    count=0; 
    for(box of boxes){
        box.disabled=true;
    }
}
const enableAll=()=>{
    for(box of boxes){
      box.disabled=false;
        box.innerText="";
    }
}
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
reset.addEventListener("click",()=>{
    enableAll();
    msg.classList.add("hide");
})
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn === true) {
            box.innerText = "O";
            turn = false;
        }
        else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        count++;
        checkWinner();

    })
})
const checkWinner=()=>{
   
    for(pattern of winpattern){
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
      if(pos1!=""&&pos2!=""&&pos3!=""){
         if(pos1===pos2&&pos2==pos3){
            msg.innerText="Winner is "+pos1; 
             msg.classList.remove("hide");
            disableAll();
         }
         else if(count==9){
            msg.innerText="Game is draw"; 
            count=0;
           msg.classList.remove("hide");      
         }
       
          
      }
      
    }   
}