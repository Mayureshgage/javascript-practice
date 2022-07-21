var imgone = document.querySelector(".catone");
var imgtwo = document.querySelector(".cattwo");
var counterone = document.querySelector("#countone");
var countertwo = document.querySelector("#counttwo");
var res = imgone.addEventListener('click',clickableone);
var res = imgtwo.addEventListener('click',clickabletwo);
var countone = 0;
var counttwo = 0;
var nameone = 'Doraemon';
var nametwo = 'Snowbell';
document.querySelector('.nameone').innerHTML = nameone;
document.querySelector('.nametwo').innerHTML = nametwo;
function clickableone() {
    countone++;
    if(countone == 1){
        counterone.innerHTML = "You clicked on Doraemon for "+ countone + " time";
    } else {
        counterone.innerHTML = "You clicked on Doraemon for "+countone + " times";
    }

}

function clickabletwo() {
    counttwo++;
    if(counttwo == 1){
        countertwo.innerHTML = "You clicked on Snowbell for "+ counttwo + " time";
    } else {
        countertwo.innerHTML = "You clicked on Snowbell for "+counttwo + " times";
    }

}