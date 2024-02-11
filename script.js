let boxes = document.querySelectorAll(".box");
let gameoverS = new Audio("gameover.wav");
let tapS = new Audio("tap.wav");
let gamewinS = new Audio("gamewin.wav");
let turn = "X";
let p1=0;
let p2=0;
let tieVal=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const increment=()=>{

}

const disableBoxes=()=>{
    for(let box of boxes){
    box.disabled=true;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn === "X") {
            box.innerText = "X";
            tapS.play();
            turn = "O"; 

        }
        else {
            box.innerText = "O";
            tapS.play();
            turn = "X";
        }
        box.disabled = true;
        checkWinner();

    })
})

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("the winner is ", pos1);
                disableBoxes();
                if(pos1==="X"){
                    p1++;
                    let ply1=document.getElementById("player1");
                    ply1.innerHTML=p1;
                }
                else if (pos1==="O"){
                    p2++;
                    document.getElementById("player2").innerHTML=p2;
                }
                else{
                    tieVal++;
                    document.getElementById("tie").innerHTML=tieVal;
                }
            }
            
        }
    }
}