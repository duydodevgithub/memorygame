// console.log("From main.js");
let imgArray = ["batman.png", "blackpanther.png", "captain.png", "hulk.png", "ironman.png", "spiderman.png", "superman.png", "thor.png"];
imgArray = imgArray.concat(imgArray);
//sort array randomlly when page loaded
imgArray.sort(function(a, b) {return 0.5 - Math.random()});
let firstMove = false, secondMove = false;
let numMove = 0;
var win = 0;
//this variable is to make sure user can't click on 3 cards
var allowToClick = true;
//function to map imgArray with card

function imgMap(id) {
    let imgName;
    switch(id) {
        case "11":imgName = imgArray[0];break;
        case "12":imgName = imgArray[1];break;
        case "13":imgName = imgArray[2];break;
        case "14":imgName = imgArray[3];break;
        case "21":imgName = imgArray[4];break;
        case "22":imgName = imgArray[5];break;
        case "23":imgName = imgArray[6];break;
        case "24":imgName = imgArray[7];break;
        case "31":imgName = imgArray[8];break;
        case "32":imgName = imgArray[9];break;
        case "33":imgName = imgArray[10];break;
        case "34":imgName = imgArray[11];break;
        case "41":imgName = imgArray[12];break;
        case "42":imgName = imgArray[13];break;
        case "43":imgName = imgArray[14];break;
        case "44":imgName = imgArray[15];break;
    }
    return imgName;
}

//start game , create cards grid 4 x 4
function start() {
    document.getElementById("star1").classList.add("checked");
    document.getElementById("star2").classList.add("checked");
    document.getElementById("star3").classList.add("checked");
    document.getElementById("result").style.visibility = "visible";    
    numMove = 0;
    document.getElementById("number").innerText = numMove;   
    win = 0;
    let grid = "";
    for(let i = 0; i < 4; i++){
        grid += "<tr>";
        for(let j = 0; j < 4; j++) {
            grid += "<td " + "id='" + (i+1) + (j+1) + "' ";
            grid += "class='card' onclick='handleClick(this)' style='background = url('assets/img/question.png')' ></td>"
        }
        grid += "</tr>"
    }
    const grids = document.getElementById("grid");
    grids.innerHTML = grid;
}

//change background img when click
function handleClick(card) {
    if(allowToClick) {
        if (firstMove && secondMove === false) {
            card.style.background = 'url("assets/img/' + imgMap(card.id) + '")';
            secondMove = card;
            card.style.pointerEvents = "none";        
            setTimeout(function(){checkWin(firstMove, secondMove)}, 1000);
            allowToClick = !allowToClick;
        } else {
            card.style.background = 'url("assets/img/' + imgMap(card.id) + '")';
            firstMove = card;
            card.style.pointerEvents = "none" ;
            // console.log(firstMove);
        }
    }
}

//check match
function checkWin(card1, card2) {
    if(card1.style.background === card2.style.background) {
        firstMove = false;
        secondMove = false;
        // card1.onclick = false;
        card2.onclick = false;
        numMove += 1;
        rating(numMove);
        win += 1;
        allowToClick = true;
        document.getElementById("number").innerText = numMove;
        if(win === 8) {
            //display winner screen
            document.getElementById("result").style.visibility = "hidden";
            const getContentId = document.getElementById("grid");
            const rating = document.getElementById("rating").innerHTML;
            getContentId.innerHTML = (rating + "<div>Congratulations! You win in " + numMove + " moves</div><button onclick='start()'>Play Again!</button>");
        }
    } else {
        firstMove = false;
        secondMove = false;
        card1.style.background = "url('assets/img/question.png')";
        card1.style.pointerEvents = "auto" ;        
        card2.style.background = "url('assets/img/question.png')";
        card2.style.pointerEvents = "auto";
        numMove += 1;    
        rating(numMove);        
        allowToClick = true;         
        document.getElementById("number").innerText = numMove;           
    }
}

//rating function
function rating(num) {
    if(num < 9) {
        document.getElementById("star1").classList.add("checked");
        document.getElementById("star2").classList.add("checked");
        document.getElementById("star3").classList.add("checked");
    } else if (num < 14) {
        document.getElementById("star3").classList.remove("checked");
    } else  {
        document.getElementById("star2").classList.remove("checked");
    }
}

//reset game
document.getElementById("btnReset").addEventListener("click", function() {
    start();
})

// start game
start();