const header = document.querySelector(".header");
const headerContainer = document.querySelector(".header .container");
const menu = document.querySelector(' .header .menu');
const hamburger = document.querySelector('.hamburger');
const navInner = document.querySelector('.nav .nav__inner');
const nav = document.querySelector('.nav ');
function handleNav(){
    function handleHamberger(){
        hamburger.addEventListener('click',function(event){
            event.stopPropagation();
            hamburger.classList.toggle('active')
            nav.classList.toggle('active')
        })
    }
    if (window.innerWidth < 768) {
        navInner.appendChild(menu);
      } else {
        headerContainer.appendChild(menu);
      }
    window.addEventListener('resize',function(){
        widthWindow = window.innerWidth;
        if(widthWindow < 768){
            navInner.appendChild(menu);
        } else{
            headerContainer.appendChild(menu);
        }
        if(widthWindow > 768){
            nav.classList.remove('active')
            hamburger.classList.remove('active')
        }
    })
    handleHamberger();
document.addEventListener('click',function(event){
    nav.classList.remove('active')
    hamburger.classList.remove('active')
})
}
  
//Gallery
const btnGallery = document.querySelector('.scgallery .btn__main');
const containerGallery = document.querySelector('.scgallery .container');
const galleryTop = document.querySelector('.scgallery .scgallery__top ');
const textboxGallery = document.querySelector('.scgallery .scgallery__top .textbox__section');
function moveBtnGallery(){
   let widthWindow = window.innerWidth;
    if(widthWindow < 768){
        containerGallery.appendChild(btnGallery)
        textboxGallery.classList.add("center");
        textboxGallery.classList.remove("left");
    }else{
        galleryTop.appendChild(btnGallery)
        textboxGallery.classList.add("left");
        textboxGallery.classList.remove("center");
    }
    window.addEventListener('resize',function(){
        widthWindow = window.innerWidth;
        if(widthWindow < 768){
            containerGallery.appendChild(btnGallery)
            textboxGallery.classList.add("center");
            textboxGallery.classList.remove("left");
        }else{
            galleryTop.appendChild(btnGallery)
            textboxGallery.classList.add("left");
            textboxGallery.classList.remove("center");
        }
    })
}
// SC Reason
const reasonMain = document.querySelector('.screason .screason__main ')
const reasonBottomItems = document.querySelectorAll('.screason .screason__main .screason__main-bottom .item')
const reasonBottom = document.querySelector('.screason .screason__main .screason__main-bottom ')
const reasonTop = document.querySelector('.screason .screason__main .screason__main-top')
const textboxReason = document.querySelector('.screason .textbox__section')
function handleReason(){
    let widthWindow = window.innerWidth;
    if(widthWindow < 768){
        reasonBottomItems.forEach(reasonBottomItem => {
        reasonTop.appendChild(reasonBottomItem)
        });
    }else{
        reasonBottomItems.forEach(reasonBottomItem => {
        reasonBottom.appendChild(reasonBottomItem)
        });
    }
    window.addEventListener('resize',function(){
        widthWindow = window.innerWidth;
        if(widthWindow < 768){
            reasonBottomItems.forEach(reasonBottomItem => {
                reasonTop.appendChild(reasonBottomItem)
                });
        }else{
            reasonBottomItems.forEach(reasonBottomItem => {
                reasonBottom.appendChild(reasonBottomItem)
                });
        }
    })
}
//SC Service
function handleService(){
    var serviceList = document.querySelector('.scservice .scservice__list');
    let widthWindow = window.innerWidth;
    if(widthWindow < 768){
        var flktyService = new Flickity( serviceList, {
        // options
        cellAlign: 'left',
        contain: true,
        freeScroll: false,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
         draggable:'>1',  
        });
    } else {
        var flktyService = new Flickity( serviceList, {
        });
        flktyService.destroy();
    }
    window.addEventListener('resize',function(){
        var serviceList = document.querySelector('.scservice .scservice__list');
           widthWindow = window.innerWidth;
        if(widthWindow < 768){
            var flktyService = new Flickity( serviceList, {
            // options
            cellAlign: 'left',
            contain: true,
            freeScroll: false,
            wrapAround: false,
            pageDots: false,
            prevNextButtons: false,  
             draggable:'>1',
            });
        } else {
            var flktyService = new Flickity( serviceList, {
            });
            flktyService.destroy();
        }
    })
}
//SC Gallery
function handleGallery(){
    Fancybox.bind('[data-fancybox="gallery"]', {
        // Your custom options
      });
}
//SC New
function handleNews(){
    var newsList = document.querySelector('.scnew .scnew__list');
    let widthWindow = window.innerWidth;
    if(widthWindow < 768){
        var flktyNews = new Flickity( newsList, {
        // options
        cellAlign: 'left',
        contain: true,
        freeScroll: false,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,  
         draggable:'>1',
        });
    } else {
        var flktyNews = new Flickity( newsList, {
        });
        flktyNews.destroy();
    }
    window.addEventListener('resize',function(){
        var newsList = document.querySelector('.scnew .scnew__list');
           widthWindow = window.innerWidth;
        if(widthWindow < 768){
            var flktyNews = new Flickity( newsList, {
            // options
            cellAlign: 'left',
            contain: true,
            freeScroll: false,
            wrapAround: false,
            pageDots: false,
            prevNextButtons: false,  
             draggable:'>1',
            });
        } else {
            var flktyNews = new Flickity( newsList, {
            });
            flktyNews.destroy();
        }
    })
}
// SC Manager

function handleManager(){
    const managerImgs = document.querySelectorAll('.scmanager .scmanager__img .scmanager__img-item');
    const managerContents = document.querySelectorAll('.scmanager .scmanager__content .scmanager__content-item');
        managerImgs.forEach((img) => {
            img.addEventListener("click", function () {
            
              // Remove All => .active
              managerImgs.forEach((img) => {
                img.classList.remove("active");
              });
              // Add Class => .active khi click
              img.classList.add("active");
              // Hide All News List giống như Remove All => .active
              managerContents.forEach((content) => {
                content.classList.remove("active");
              });
              // Get data
              // Cach 1
              //   let dataID = img.getAttribute("data-scmanager-img");
              // Cach 2
              let dataID2 = img.dataset.scmanagerImg;
        
              // Active List number
              let contentListActive = document.querySelector(`.scmanager__content-item-${dataID2}`);
              contentListActive.classList.add("active");
            });
        });
        
    
}
//SC Brand
function handleBrands(){
    let widthWindow = window.innerWidth;
    if(widthWindow < 576){
        var brandList = document.querySelector('.scbrand .scbrand__list');
        var flktyBrands = new Flickity( brandList, {
            // options
            cellAlign: 'left',
            contain: true,
            freeScroll: false,
            wrapAround: true,
            pageDots: true,
            prevNextButtons: false,  
            draggable:'>1',
            // autoPlay:1000,
         });
    } else{
        var brandList = document.querySelector('.scbrand .scbrand__list');
        var flktyBrands = new Flickity( brandList, {
            // options
            cellAlign: 'left',
            contain: true,
            freeScroll: true,
            wrapAround: true,
            pageDots: true,
            prevNextButtons: false,  
            autoPlay:1000,
            draggable:'>1',
        });
    }
    window.addEventListener('resize',function(){
        let widthWindow = window.innerWidth;
        if(widthWindow < 576){
            var brandList = document.querySelector('.scbrand .scbrand__list');
            var flktyBrands = new Flickity( brandList, {
                // options
                cellAlign: 'left',
                contain: true,
                freeScroll: false,
                wrapAround: true,
                pageDots: true,
                prevNextButtons: false,  
                draggable:'>1',
                // autoPlay:1000,
             });
        } else{
            var brandList = document.querySelector('.scbrand .scbrand__list');
            var flktyBrands = new Flickity( brandList, {
                // options
                cellAlign: 'left',
                contain: true,
                freeScroll: true,
                wrapAround: true,
                pageDots: true,
                prevNextButtons: false,  
                autoPlay:1000,
                draggable:'>1',
            });
        }
    })
}
// backtotop
function backtotop(){
 const backToTop = document.querySelector('.backtotop');
 const scHero = document.querySelector('.schero');
 window.addEventListener('scroll', function(){
    if(window.pageYOffset >= scHero.offsetHeight){
        backToTop.classList.add('active');
    }else{
        backToTop.classList.remove('active')
    }

 })
 backToTop.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
 })
}
backtotop()
// Loading
function loading(){
    let loadingPage = document.querySelector(".loading");
    let count = 0;
    let progressBar = document.querySelector(".loader");
    let progressNumber = document.querySelector(".loader__number ");
    let allImgs = document.querySelectorAll("img").length;
    let imgLoad = imagesLoaded("img");
  
    imgLoad.on("progress", function (instance, image) {
      count++;
      let percentCount = Math.floor((count / allImgs) * 100);
      progressNumber.innerHTML = `${percentCount}%`;
    });
    imgLoad.on("done", function () {
      loadingPage.classList.add("active");
    });
}
// Gsap animation Page
function gsapSection(){
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".animate-secvice",{
        scrollTrigger:'.animate-secvice',
        duration: 0.6,
        opacity:0,
        y: 150,
        stagger:0.3
     })
    gsap.from(".animate-scwelcome-1",{
        scrollTrigger:'.animate-scwelcome-1',
        duration: 0.6,
        opacity:0,
        x: -150,
        stagger:0.3
     })
    gsap.from(".animate-scwelcome-2",{
        scrollTrigger:'.animate-scwelcome-2',
        duration: 0.6,
        opacity:0,
        x: 150,
        stagger:0.3
     })
     gsap.from(".animate-scgallery",{
        scrollTrigger:'.animate-scgallery',
        duration: 0.6,
        opacity:0,
        y: 150,
        stagger:0.3
     })
     gsap.from(".animate-scteam",{
        scrollTrigger:'.animate-scteam',
        duration: 0.6,
        opacity:0,
        y: 150,
        stagger:0.3
     })
     gsap.from(".animate-screason",{
        scrollTrigger:'.animate-screason',
        duration: 0.6,
        opacity:0,
        y: 150,
        stagger:0.3
     })
     gsap.from(".animate-scmanager",{
        scrollTrigger:'.animate-scmanager',
        duration: 0.6,
        opacity:0,
        y: 150,
        stagger:0.3
     })
     gsap.from(".animate-scbrand",{
        scrollTrigger:'.animate-scbrand',
        duration: 0.6,
        opacity:0,
        y: 200,
        stagger:0.3
     })
    
}
// Menu 
window.addEventListener('load', function(){
$(".myparoller").paroller({
  factor: 0.5,
});    
handleNav();
moveBtnGallery();
handleReason();
handleGallery();
handleService();
handleNews();
handleBrands();
handleManager();
gsapSection();
loading();

})
