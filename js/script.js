let count = 1;

setInterval( function(){
    nextImage()
}, 2000)

function nextImage(){
    count++;
    if (count>5) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

let c = 6;

setInterval(function() {
    nextImage2()
}, 2000)

function nextImage2() {
    c++;
    if (c>10) {
        c = 6;
    }

    document.getElementById("radio"+c).checked = true;
}
