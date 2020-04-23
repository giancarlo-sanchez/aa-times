
function makeDate () {
    const today = new Date;
    const day = today.getDate();
    const weekday = today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();
    const months = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"]
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const fullDate = `${weekdays[weekday]}, ${months[month]} ${day}, ${year}`;
    return fullDate;
}

window.addEventListener('DOMContentLoaded', () => {

const todayDate = document.getElementsByClassName("masthead__date");
todayDate[0].innerHTML = `${makeDate()}`;

});