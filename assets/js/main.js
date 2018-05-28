// console.log("From main.js");
let imgArray = ["batman.png", "blackpanther.png", "captain.png", "hulk.png", "ironman.png", "spiderman.png", "superman.png", "thor.png"];
imgArray = imgArray.concat(imgArray);
//sort array randomlly when page loaded
imgArray.sort(function(a, b) {return 0.5 - Math.random()});
//loading image to table grid
const loadImage = function() {
    $("#11").html("<img src='assets/img/" + imgArray[0]+"'>");
    $("#12").html("<img src='assets/img/" + imgArray[1]+"'>");
    $("#13").html("<img src='assets/img/" + imgArray[2]+"'>");
    $("#14").html("<img src='assets/img/" + imgArray[3]+"'>");
    $("#21").html("<img src='assets/img/" + imgArray[4]+"'>");
    $("#22").html("<img src='assets/img/" + imgArray[5]+"'>");
    $("#23").html("<img src='assets/img/" + imgArray[6]+"'>");
    $("#24").html("<img src='assets/img/" + imgArray[7]+"'>");
    $("#31").html("<img src='assets/img/" + imgArray[8]+"'>");
    $("#32").html("<img src='assets/img/" + imgArray[9]+"'>");
    $("#33").html("<img src='assets/img/" + imgArray[10]+"'>");
    $("#34").html("<img src='assets/img/" + imgArray[11]+"'>");
    $("#41").html("<img src='assets/img/" + imgArray[12]+"'>");
    $("#42").html("<img src='assets/img/" + imgArray[13]+"'>");
    $("#43").html("<img src='assets/img/" + imgArray[14]+"'>");
    $("#44").html("<img src='assets/img/" + imgArray[15]+"'>");
}

loadImage();