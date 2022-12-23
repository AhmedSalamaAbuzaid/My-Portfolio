var Typed = new Typed(".multi-text",{
    strings : ["Coder","Vloger","Designer"],
    loop :true,
    typeSpeed :100,
    backSpeed : 80,
    backDelay : 1500,
    });

function myCv(){
    let icon = document.getElementById("dark-moon");
    let splash = document.getElementById("splash");
    let myPicture = document.getElementById("my-picture");
    let imagesDrak = document.querySelectorAll(".imgbox img");

    if(localStorage.getItem("mood_toggle")){
        document.body.classList.toggle(localStorage.getItem("mood_toggle"));
        if (document.body.classList.contains("dark-theme")){
            localStorage.setItem("mood_toggle","dark-theme")
            icon.innerHTML = `<i class="fa-solid fa-lightbulb"></i>`;
            splash.src = "./images/black-purple.jpg";
            myPicture.src = "./images/black-me.jpg";

                imagesDrak[0].style.mixBlendMode = "lighten";
                imagesDrak[1].style.mixBlendMode = "lighten";
                imagesDrak[1].style.right = "80px";

                function myFunction(x) {
                    if (x.matches) { // If media query matches
                        imagesDrak[1].style.right = "60px";
                    } else {
                        imagesDrak[1].style.right = "99px";
                    }
                }

                var x = window.matchMedia("(max-width: 676px)")
                  myFunction(x) // Call listener function at run time
                  x.addListener(myFunction) // Attach listener function on state changes

        } else {
            localStorage.removeItem("mood_toggle")
            icon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
            splash.src = "./images/comhiclipartifata.jpg";
            myPicture.src = "./images/me-mountian2kk.jpg";

                imagesDrak[0].style.mixBlendMode = "darken";
                imagesDrak[1].style.mixBlendMode = "darken";


                function myFunction(x) {
                    if (x.matches) { // If media query matches
                        imagesDrak[1].style.right = "60px";
                        // splash.style.cssText = "top: -109px;left: 100px;width: 200%;"

                    } else {
                        imagesDrak[1].style.right = "-200px";
                    }
                  }

                  var x = window.matchMedia("(max-width: 676px)")
                  myFunction(x) // Call listener function at run time
                  x.addListener(myFunction) // Attach listener function on state changes
        };
    };

    icon.onclick = function () {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")){
            localStorage.setItem("mood_toggle","dark-theme")
            icon.innerHTML = `<i class="fa-solid fa-lightbulb"></i>`;
            splash.src = "./images/black-purple.jpg";
            myPicture.src = "./images/black-me.jpg";

                imagesDrak[0].style.mixBlendMode = "lighten";
                imagesDrak[1].style.mixBlendMode = "lighten";
                imagesDrak[1].style.right = "80px";

                function myFunction(x) {
                    if (x.matches) { // If media query matches
                        imagesDrak[1].style.right = "60px";
                    } else {
                        imagesDrak[1].style.right = "99px";
                    }
                }

                var x = window.matchMedia("(max-width: 676px)")
                  myFunction(x) // Call listener function at run time
                  x.addListener(myFunction) // Attach listener function on state changes

        } else {
            localStorage.removeItem("mood_toggle")
            icon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
            splash.src = "./images/comhiclipartifata.jpg";
            myPicture.src = "./images/me-mountian2kk.jpg";

                imagesDrak[0].style.mixBlendMode = "darken";
                imagesDrak[1].style.mixBlendMode = "darken";


                function myFunction(x) {
                    if (x.matches) { // If media query matches
                        imagesDrak[1].style.right = "60px";
                        // splash.style.cssText = "top: -109px;left: 100px;width: 200%;"

                    } else {
                        imagesDrak[1].style.right = "-200px";
                    }
                  }

                  var x = window.matchMedia("(max-width: 676px)")
                  myFunction(x) // Call listener function at run time
                  x.addListener(myFunction) // Attach listener function on state changes
        };

    };
}
myCv();



let nav = document.querySelector(".header-area");

// Scroll Down and Show on Scroll Up

var lastScrollTop; // This Varibale will store the top position

window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    nav.style.transform = "translateY(-120px)"
    //set the value to the negetive of height of navbar 
  }
  
  else{
    nav.style.transform = "translateY(0px)";
  }
  
  lastScrollTop = scrollTop; //New Position Stored
});



// animation on gallary
const galleryImg = document.querySelectorAll(".gallery .images-box img");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("observe-gallary", entry.isIntersecting);
        // if you want animation happen once
        // if (entry.isIntersecting) observer.unobserve(entry.target);
    });
}, {
    threshold: 1,
});

galleryImg.forEach(img => {
    observer.observe(img)
});