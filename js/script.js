window.addEventListener("scroll" , () =>{
    nav_scroll();
    add_active();
    in_resume();
})


// navbar change to fixed top
let navbar = document.querySelector('.navbar');
let nav_scroll = () => {
    if(window.scrollY > 30){
        navbar.classList.add("sticky-top");
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky-top");
        navbar.classList.remove("sticky");
    }
}
// add active to nav-item in scroll section
let sections = document.querySelectorAll('.section'),
nav_item = document.querySelectorAll('.nav-item');
let add_active = () => {
    sections.forEach(sec  =>{
        if(window.scrollY > sec.offsetTop - 100){
            nav_item.forEach(item => {
                item.classList.remove("active");
                if(sec.dataset.section == item.dataset.name){
                    item.classList.add("active")
                }
            })
        }
    })
}
// event click on nav-item ----> scroll to section
nav_item.forEach(item => {
    item.addEventListener("click" ,(e) =>{
        e.preventDefault();
        sections.forEach(sec => {
            if(item.dataset.name == sec.dataset.section){
                window.scrollTo({ top: sec.offsetTop - 100, behavior: 'smooth' });
            }
        })
    })
})
// Typewriter Effect 
var app = document.getElementById('typewriter');
var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('FreeLancer.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Web Desginer.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Developer.')
    .pauseFor(1000)
    .start();
// resume section 
let resume = document.querySelector(".resume"),
mini_nav = document.querySelectorAll(".mini-nav"),
mini_section = document.querySelectorAll(".mini-section"),
list = document.querySelector(".resume ul"),
height = parseFloat( window.getComputedStyle(resume, null).getPropertyValue("height"));
in_resume = () => {
    if(window.scrollY > resume.offsetTop - 10 && window.scrollY < resume.offsetTop + height){
        list.style.position = "sticky";
        mini_section.forEach(sec => {
            if(window.scrollY > sec.offsetTop + resume.offsetTop){
                mini_nav.forEach(nav => {
                    nav.classList.remove("active");
                    if(sec.dataset.nav == nav.dataset.sec){
                        nav.classList.add("active");
                    }
                })
            }
        })
    }
    else {
        list.style.position = "static";
        console.log("ok");
    }
};
// filter images in section works 
let img_filter = (name) => {
    let imgs = document.querySelectorAll(".works .box");
    imgs.forEach(img => {
        img.classList.remove("active");
        setTimeout(() => {
            img.style.display = "none";
        }, 500);
       if(name == "all"){
           img.classList.add("active");
           setTimeout(() => {
            img.style.display = "block";
        }, 500);
       }
     if(img.classList.contains(name))
       {
           img.classList.add("active");
           setTimeout(() => {
               img.style.display = "block";
           }, 500);
       }
    })
}
let items_only = document.querySelectorAll(".only .box .text-box .item"),
bullets = document.querySelectorAll(".only .box .bullet span");
// bullets.forEach(bul => {
//     bul.addEventListener("click", () => {
//         bul.classList.remove("active");
//         items_only.forEach(item => {
//             item.classList.remove("active");
//             if(item.dataset.num == bul.dataset.number){
//                 item.classList.add("active");
//                 bul.classList.add("active");
//             }
//         })
        
//     })
// })

items_only.forEach(item => {
    bullets.forEach(bul => {
        bul.addEventListener("click" , () => {
            item.classList.remove("active");
            if(item.dataset.num == bul.dataset.number){
                bullets.forEach(bl => bl.classList.remove("active"))
                item.classList.add("active");
                bul.classList.add("active");
            }
        })
    })
})