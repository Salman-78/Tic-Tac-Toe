let boxes = document.querySelectorAll(".box");
let resbtn = document.querySelector("#resBtn");
let newbtn = document.querySelector("#newBtn");
let msgdiv = document.querySelector(".msg");
let para = document.querySelector("#won");


let turnX = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
} 

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    para.innerText = `Congratulation, Winner is ${winner}`;
    msgdiv.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
    
}

const resetGame = () => {
    turnX = true;
    enableBoxes();
    msgdiv.classList.add("hide");
}

resbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);



















// let boxes = document.querySelectorAll(".box");
// let resbtn = document.querySelector("#resBtn");
// let newbtn = document.querySelector("#newBtn");
// let msgdiv = document.querySelector(".msg");
// let para = document.querySelector("#won");

// let turnX = true;

// const winPatterns = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (turnX) {
//             box.innerText = "X";
//             turnX = false;
//         } else {
//             box.innerText = "O";
//             turnX = true;
//         }
//         box.classList.add('disabled');
//         checkWinner();
//     });
// });

// const enableBoxes = () => {
//     for (let box of boxes) {
//         box.classList.remove('disabled');
//         box.innerText = "";
//     }
// };

// const disableBoxes = () => {
//     for (let box of boxes) {
//         box.classList.add('disabled');
//     }
// };

// const showWinner = (winner) => {
//     para.innerText = `Congratulations, Winner is ${winner}`;
//     msgdiv.classList.remove("hide");
//     disableBoxes();
// };

// const checkWinner = () => {
//     for (let pattern of winPatterns) {
//         let pos1val = boxes[pattern[0]].innerText;
//         let pos2val = boxes[pattern[1]].innerText;
//         let pos3val = boxes[pattern[2]].innerText;

//         if (pos1val != "" && pos2val != "" && pos3val != "") {
//             if (pos1val === pos2val && pos2val === pos3val) {
//                 showWinner(pos1val);
//                 return;
//             }
//         }
//     }
// };

// const resetGame = () => {
//     turnX = true;
//     enableBoxes();
//     msgdiv.classList.add("hide");
// };

// resbtn.addEventListener("click", resetGame);
// newbtn.addEventListener("click", resetGame);
