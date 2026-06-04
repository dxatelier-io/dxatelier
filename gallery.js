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

/* Disable Right Click */

document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
});

/* Disable Drag */

document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("draggable","false");

});

/* Modal Viewer */

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".entry img")
.forEach(img=>{

    img.addEventListener("click",()=>{

        modal.style.display="flex";
        modalImg.src=img.src;

    });

});

closeBtn.onclick=()=>{

    modal.style.display="none";

};

modal.onclick=(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

};

/* Screenshot Warning (limited support) */

document.addEventListener("keydown",(e)=>{

    if(e.key==="PrintScreen"){

        alert(
`This archive contains personal memories.

Please respect the content and avoid saving, redistributing, or reusing these photographs without permission.`
        );

    }

});
