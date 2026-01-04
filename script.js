 // set the default active slide to the first one
 let slideIndex = 1;
 showSlide(slideIndex);
 // change slide with the prev/next button
 function moveSlide(moveStep) {
     showSlide(slideIndex += moveStep);
 }
 // change slide with the dots
 function currentSlide(n) {
     showSlide(slideIndex = n);
 }

 function showSlide(n) {
     let i;
     const slides = document.getElementsByClassName("slide");
     const dots = document.getElementsByClassName('dot');
     if (n > slides.length) {
         slideIndex = 1
     }
     if (n < 1) {
         slideIndex = slides.length
     }
     // hide all slides
     for (i = 0; i < slides.length; i++) {
         slides[i].classList.add('hidden');
     }
     // remove active status from all dots
     for (i = 0; i < dots.length; i++) {
         dots[i].classList.remove('bg-black');
         dots[i].classList.add('bg-white');
     }
     // show the active slide
     slides[slideIndex - 1].classList.remove('hidden');
     // highlight the active dot
     dots[slideIndex - 1].classList.remove('bg-white');
     dots[slideIndex - 1].classList.add('bg-black');
 }
 setInterval(() => {
 moveSlide(1);
}, 5000);

function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = [
    "a Data Engineer", 
    "a Creative Problem Solver",
    "a Tech Explorer",
    "an ML Explorer",
    "a Musician"
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
