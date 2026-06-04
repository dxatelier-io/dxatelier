function updateClock(){

    const now = new Date();

    const time = now.toLocaleTimeString(
        'en-US',
        {
            hour12:false
        }
    );

    document.getElementById('clock').textContent = time;
}

updateClock();

setInterval(updateClock,1000);
