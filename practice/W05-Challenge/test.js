function calculateDaysBetweenDates(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var days = (endDate - beginDate) / (1000 * 60 * 60 * 24);
    return days;
}

// find all images without alternate text
// and give them a red border
function process() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        if (images[i].alt == "") {
            images[i].style.border = "2px solid red";
        }
    }
}