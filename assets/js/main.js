let imgArray = ["batman.png", "blackpanther.png", "captain.png", "hulk.png", "ironman.png", "spiderman.png", "superman.png", "thor.png"];
imgArray = imgArray.concat(imgArray);
//sort array randomlly when page loaded
imgArray.sort(function(a, b) {return 0.5 - Math.random()});

//loading question image to table grid
const loadImage = function() {
    $("td").each(function() {
        $(this).html("<img src='assets/img/question.png'>");
    });
}

// bind click event to each td
$("td").on("click", function() {
    switch(this.id) {
        case "11" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[0]+"'>");break;
        case "12" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[1]+"'>");break;
        case "13" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[2]+"'>");break;
        case "14" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[3]+"'>");break;
        case "21" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[4]+"'>");break;
        case "22" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[5]+"'>");break;
        case "23" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[6]+"'>");break;
        case "24" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[7]+"'>");break;
        case "31" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[8]+"'>");break;
        case "32" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[9]+"'>");break;
        case "33" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[10]+"'>");break;
        case "34" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[11]+"'>");break;
        case "41" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[12]+"'>");break;
        case "42" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[13]+"'>");break;
        case "43" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[14]+"'>");break;
        case "44" : $(this).html("<img class='card-img' src='assets/img/" + imgArray[15]+"'>");break;
    }
})

// timer function
//  Variable that will hold our setInterval that runs the stopwatch
let intervalId;
//prevents the clock from being sped up unnecessarily
let clockRunning = false;
const stopwatch = {
    time: 0,
    start: function () {
        if(!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },
    count: function() {
        stopwatch.time++;
        let converted = stopwatch.timeConverter(stopwatch.time);
        $("#timer").html(converted);
    },
    timeConverter: function(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
    
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
          minutes = "00";
        }
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
      },
      stop: function() {
          clearInterval(intervalId);
          clockRunning = false;
      }
}

loadImage();

const main = function() {
    let firstMove = false;
    let secondMove = false;
}