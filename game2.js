let boxes=document.querySelectorAll(".box")

let btn=document.querySelector(".withdraw");
let replace=document.querySelector(".game1");

const game=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

let i=0;
while(i<5){
    let t=Math.floor(Math.random() * 25);
    game[t]=0;
    i++;
}

const truecheck=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

let get = 100;
let Get=document.querySelector(".money")

const loss = ()=>{
    replace.innerHTML= `
    <h1 style='font-size: 30vmin'>💣</h1>
    <h1 style='color:green'>You Lose</h1>
    <button style='font-size: 1.5rem;
        margin-top: 2rem;
        padding:3px 10px 3px 10px;
        border-radius: 0.7rem;
        background-color: rgb(206, 174, 236);
        border: 0.2px solid black;
        box-shadow:0 0 1.3rem rgb(4, 49, 49);' onclick = window.location.reload();>Play Again</button>
    `   
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(truecheck[box.value]===1)
        {
            truecheck[box.value]=0;
            if(game[box.value]===1 )
                {
                    box.innerText="💎";
                    get=get*1.2;
                    Get.innerText=get.toFixed(0);
                }
                else
                {
                    box.innerText="💣";
                    get=0;
                    Get.innerText=get;
                    setTimeout(function() {
                        loss();
                    }, 300);
                }
        }
    });
})

btn.onclick = function() {
    console.log("hii");
    replace.innerHTML = `
        <h1 style='color:green'>Congratulations</h1>
        <h1 style='font-size: 38vmin'>💰</h1>
        <h1 style='color:green'>You Win $${get}</h1>
        <button style='font-size: 1.5rem;
        margin-top: 2rem;
        padding:3px 10px 3px 10px;
        border-radius: 0.7rem;
        background-color: rgb(206, 174, 236);
        border: 0.2px solid black;
        box-shadow:0 0 1.3rem rgb(4, 49, 49);' onclick = window.location.reload();>Play Again</button>

    `;
}

