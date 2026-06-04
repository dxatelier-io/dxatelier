function updateClock(){

    document.getElementById("clock").textContent =
    new Date().toLocaleTimeString(
        'en-US',
        {
            hour12:false
        }
    );

}

updateClock();

setInterval(updateClock,1000);
