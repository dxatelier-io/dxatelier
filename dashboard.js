function updateClock(){

    const now = new Date();

    const time = now.toLocaleTimeString(
        'en-US',
        {
            hour12:false
        }
    );

    const date = now.toLocaleDateString(
        'en-US',
        {
            weekday:'long',
            month:'long',
            day:'numeric',
            year:'numeric'
        }
    );

    document.getElementById('clock').textContent = time;
    document.getElementById('date').textContent = date;

}

updateClock();
setInterval(updateClock,1000);

const hour = new Date().getHours();

let greeting = "Good Evening";

if(hour < 12){
    greeting = "Good Morning";
}
else if(hour < 18){
    greeting = "Good Afternoon";
}

document.getElementById('greeting').textContent = greeting;
