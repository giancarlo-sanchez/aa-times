
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

function closeDropDown() {
    return window.addEventListener("click", event => {
        const dropDown = document.getElementsByClassName("pref");
        dropDown[0].classList.add("pref--hidden");
        console.log("hello!");
    });
}

window.addEventListener('DOMContentLoaded', () => {

const todayDate = document.getElementsByClassName("masthead__date");
todayDate[0].innerHTML = `${makeDate()}`;

    const dropDown = document.getElementsByClassName("pref");
    dropDown[0].classList.add("pref--hidden");

    const gearIcon = document.getElementsByClassName("masthead__actions-icon");
    gearIcon[0].addEventListener("click", event => {
        event.stopPropagation();
        dropDown[0].classList.remove("pref--hidden");  
        closeDropDown();
    });

    const hideSearch = document.getElementsByClassName("masthead__searchButton");
    const searchBar = document.getElementsByClassName("search");
    searchBar[0].classList.add("search--hidden");  
    
    hideSearch[0].addEventListener("click", event => {
        const searchBar = document.getElementsByClassName("search");

        searchBar[0].classList.toggle("search--hidden");  
    });
    

});