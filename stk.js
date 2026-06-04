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

function comingSoon(){

    alert(
`Selamat Tinggal, Kita is currently in the publishing process.

Please stay tuned for future updates.

Thank you for your patience.`
    );

}
