// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


// ==========================
// Navbar Shadow
// ==========================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

    }

    else{

        header.style.boxShadow="0 2px 10px rgba(0,0,0,.08)";

    }

});


// ==========================
// Fade Animation
// ==========================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.2});

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="all .8s ease";

    observer.observe(section);

});


// ==========================
// Profile Image Animation
// ==========================

const image=document.querySelector(".hero-image img");

image.addEventListener("mouseenter",()=>{

    image.style.transform="scale(1.05)";

});

image.addEventListener("mouseleave",()=>{

    image.style.transform="scale(1)";

});


// ==========================
// Typing Effect
// ==========================

const title=document.querySelector(".hero-text h2");

const text=title.innerHTML;

title.innerHTML="";

let i=0;

function typing(){

    if(i<text.length){

        title.innerHTML+=text.charAt(i);

        i++;

        setTimeout(typing,60);

    }

}

typing();

// =======================
// DARK MODE
// =======================

const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML="☀️";

    }

    else{

        themeBtn.innerHTML="🌙";

    }

}
/* ==========================
   CERTIFICATES SLIDER
========================== */

const cards = document.querySelectorAll(".certificate-card");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let current = 0;

function showCard(index){

    cards.forEach(card=>{

        card.classList.remove("active");

    });

    cards[index].classList.add("active");

}

nextBtn.addEventListener("click",()=>{

    current++;

    if(current>=cards.length){

        current=0;

    }

    showCard(current);

});

prevBtn.addEventListener("click",()=>{

    current--;

    if(current<0){

        current=cards.length-1;

    }

    showCard(current);

});

showCard(current);


/* ==========================
   CERTIFICATE POPUP
========================== */

const popup=document.getElementById("certificatePopup");

const popupImg=document.getElementById("popupImage");

const closePopup=document.getElementById("closePopup");

document.querySelectorAll(".view-btn").forEach(button=>{

    button.addEventListener("click",()=>{

        popup.style.display="flex";

        popupImg.src=button.dataset.img;

    });

});

closePopup.onclick=()=>{

    popup.style.display="none";

}

popup.onclick=(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

}