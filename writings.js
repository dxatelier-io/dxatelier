function updateClock(){

    const now = new Date();

    document.getElementById('clock').textContent =
    now.toLocaleTimeString(
        'en-US',
        {
            hour12:false
        }
    );
}

updateClock();

setInterval(updateClock,1000);
