// Preloader
window.addEventListener('load',()=>{document.getElementById('preloader').style.display='none';});

// Testimonials slider
let testimonials=document.querySelectorAll('.testimonial');
let currentIndex=0;
function showTestimonial(index){testimonials.forEach((t,i)=>t.classList.toggle('active',i===index));}
setInterval(()=>{currentIndex=(currentIndex+1)%testimonials.length;showTestimonial(currentIndex);},4000);

// Fade-in on scroll
let sections=document.querySelectorAll('.fade-in');
window.addEventListener('scroll',()=>{
    sections.forEach(section=>{
        let top=section.getBoundingClientRect().top;
        let windowHeight=window.innerHeight;
        if(top<windowHeight-100){section.classList.add('visible');}
    });
});

// Video modal
let modal=document.getElementById('videoModal');
let heroVideo=document.getElementById('heroVideo');
let modalVideo=document.getElementById('modalVideo');
let playBtn=document.getElementById('playBtn');
let closeBtn=document.querySelector('.close');

playBtn.addEventListener('click',()=>{
    modal.style.display='block';
    modalVideo.play();
});
closeBtn.addEventListener('click',()=>{
    modal.style.display='none';
    modalVideo.pause();
});
window.addEventListener('click', e=>{if(e.target==modal){modal.style.display='none';modalVideo.pause();}});

// Smooth scroll nav
document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Back to Top button
let backToTop=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{
    if(window.scrollY>400){backToTop.style.display='block';} else{backToTop.style.display='none';}
});
backToTop.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'});});

// Theme toggle
const themeToggle=document.getElementById('themeToggle');
themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent=document.body.classList.contains('dark-mode')?'☀️':'🌙';
});

// Particle background
if(window.innerWidth<768){var particleNumber=40;}else{var particleNumber=60;}
particlesJS("particles-js", {particles:{number:{value:particleNumber,density:{enable:true,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:0.5,random:true},size:{value:3,random:true},line_linked:{enable:true,distance:150,color:"#ffffff",opacity:0.4,width:1},move:{enable:true,speed:2,direction:"none",out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:true,mode:"grab"},onclick:{enable:true,mode:"push"},resize:true},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:200,size:8,duration:2,opacity:0.8},repulse:{distance:100},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:true});

// Simple parallax scrolling
window.addEventListener('scroll',()=>{
    document.querySelectorAll('.section').forEach(section=>{
        let speed=0.5;
        let offset=window.scrollY*speed;
        section.style.backgroundPositionY=`${offset}px`;
    });
});
