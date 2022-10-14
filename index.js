/* =======================================
      Responsive navbar component 
======================================= */
const mobileNavBtn = document.querySelector(".mobile-navbar-btn");
const headerEle = document.querySelector(".header");

mobileNavBtn.addEventListener("click", () => {
    headerEle.classList.toggle("active");
})








/* =======================================
      Portfolio  tabbed component 
======================================= */

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_element = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e)=>{
    const p_btn_clicked = e.target;
    // console.log(p_btns_clicked);
    p_btn.forEach((curElem)=>{
        curElem.classList.remove("p-btn-active");
    });
    p_btn_clicked.classList.add("p-btn-active");

    // to find the num in data attribute
    const btn_num = p_btn_clicked.dataset.btnNum;
   
    
    const active_img = document.querySelectorAll(`.p-btn--${btn_num}`);
    p_img_element.forEach((curElem)=> curElem.classList.add("hidden-img"));
    active_img.forEach((curElem)=>curElem.classList.remove("hidden-img"))
});

// Swiper JS code / Testimonial section//

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
        delay:2500
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const myJsMedia = (widthSize) => {
    if(widthSize.matches){
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay:{
                delay:2500
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
    } else{
        new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay:{
                delay:2500
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
    }
  };


  const widthSize =   window.matchMedia("(max-width:600px)");
  myJsMedia(widthSize);
  widthSize.addEventListener("change", myJsMedia);

//   Waiting to get a job //

const countdown = ( ) => {
    const countDate = new Date("September 15, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
   

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    let textDay =Math.floor(gap/day);
    let textHour = Math.floor((gap % day) / hour);
    let textMinute = Math.floor((gap % hour) / minute);
    let textSecond = Math.floor((gap % minute) / second);
   

    document.querySelector(".day").innerText =    Math.abs(textDay);
    document.querySelector(".hour").innerText =   Math.abs(textHour);
    document.querySelector(".minute").innerText = Math.abs(textMinute);
    document.querySelector(".second").innerText = Math.abs(textSecond);


};

setInterval(countdown, 1000);


//   Scroll to hero section //

const footerElement = document.querySelector(".section-footer");
const heroSection = document.querySelector(".section-hero");


const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = '<i class="fa-solid fa-arrow-up scroll-top"></i>';

footerElement.after(scrollElement);

const scrollTop = ( ) => {
    heroSection.scrollIntoView({behavior:"smooth"});
}

scrollElement.addEventListener("click", scrollTop);

// Parallex effect //

const heroTextContainer = document.querySelector(".section-hero-data");
const heroImgContainer = document.querySelector(".section-hero-img");
const heroContainer = document.querySelector(".section-hero");
const bioData = document.querySelector(".bio-data");

const bioImg = document.querySelector(".bio-img");
window.addEventListener("scroll",() => {
  let offsetY = window.scrollY
  
  heroTextContainer.style.transform=`translate( ${offsetY * 0.1}px, ${offsetY * 0.7}px)`
  heroImgContainer.style.transform=`translate( ${offsetY * 0.1}px, ${offsetY * 0.9}px)`
  // bioImg.style.transform=`translateX(${offsetY * 1 }px)`
  // bioData.style.transform=`translateX(${-offsetY * 0.8 }px)`


})