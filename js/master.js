
// check if there's local storage color option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null){
    // console.log("local storage not empty");

    document.documentElement.style.setProperty('--small-colors',mainColors);

    // checked For active Class and reove active
    document.querySelectorAll(".colors-list li").forEach(li =>{
        li.classList.remove("active");

        // add active Class On element with Data-Color === local storage item
        if (mainColors === li.dataset.color){
            li.classList.add("active");
        };
    });
};



// select setting box 
let settingBox = document.querySelector(".setting-box");
let gearIcon = document.getElementById("gear-icon");
let settingIcon= document.querySelector(".setting-icon");

// toggle spin class on setting icon and open as well
settingIcon.onclick = () => {
    if (gearIcon.classList.contains("fa-spin") ){
        gearIcon.classList.remove("fa-spin");
    } else {
        gearIcon.classList.add("fa-spin");
    }
    // if (settingBox.classList.contains("open")){
    //     settingBox.classList.remove("open");
    // } else {
    //     settingBox.classList.add("open");
    // }
    settingBox.classList.toggle("open");
}

// switch Colors on click
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
    li.addEventListener('click', (e)=>{
        
        // console.log(e.target.dataset.color);
        // set color On root
        document.documentElement.style.setProperty('--small-colors',e.target.dataset.color);

        // set color on local storage
        localStorage.setItem("color_option",e.target.dataset.color);



        handelActiveClass(e)

    });
});


// select landing page element
let landingPage= document.querySelector(".landing-page");

// Get Array Of imgs 
let imgsArray = ["01.jpg","02.jpg","03.png","05.jpg","06.jpg","07.png","08.png","09.png"];



let imgPause;
// random background option 
let backgrounOption = true;

// varible to control the interval
let backgroundInterval;

if(localStorage.getItem("background_option") !== null) {

    document.querySelectorAll(".random-btns span").forEach(span => {
        span.classList.remove("active")
        let backgrounOptionStorag = localStorage.getItem("background_option");

        if(backgrounOptionStorag === "no"){
            backgrounOption = false ;
            document.querySelector(".random-btns .no").classList.add("active");
            landingPage.style.backgroundImage = `url("./images/background-landing/${localStorage.getItem("img_Data")}")`;


            clearInterval(backgroundInterval);
        } else {
            backgrounOption = true ;

            document.querySelector(".random-btns .yes").classList.add("active");

            landingPage.style.backgroundImage = `url("./images/background-landing/${localStorage.getItem("img_Data")}")`;

            localStorage.removeItem("backgroundImage");
        }

    })
}

// switch random background on click yes or no
const randomBackground = document.querySelectorAll(".random-btns span");


randomBackground.forEach(span => {

    span.addEventListener('click', (e)=>{
        
        handelActiveClass(e);

        
        if (e.target.dataset.choise === "yes"){
            backgrounOption = true ;
            localStorage.setItem("background_option", "yes");

            localStorage.removeItem("backgroundImage");

            randomizeImgs();
        } else {
            backgrounOption = false ;

            localStorage.setItem("background_option", "no");

            clearInterval(backgroundInterval);

        }

    });

});



// function randomize Imgs
function randomizeImgs () {

    if (backgrounOption === true){
        backgroundInterval = setInterval(() => {

            // get random number
            // let randomNum = Math.floor(Math.random() * imgsArray.length);
            let indexo = Math.floor(Math.random() * imgsArray.length)
            // change Backgrounf image url
            landingPage.style.backgroundImage = `url("./images/background-landing/${imgsArray[indexo]}")`;
            
            imgPause = imgsArray[indexo];
            localStorage.setItem("img_Data",imgPause);
        
        },4000);
    }
}
randomizeImgs ();




// select skills selector
let myskills = document.querySelector(".skills");
let mySpan =  document.querySelectorAll(".skill-progress span");

let mySocial = document.querySelector("#social");
let myLinks = document.querySelector(".links");
let myP = document.querySelector(".navItems p");
let myLogo = document.querySelector(".logo");



window.onscroll = function () {

    // Skills Ofset Top 
    // let skillsOffsetTop = myskills.offsetTop;

    // // Skills outer height 
    // let skillsOuterHeight = myskills.offsetHeight;

    // // window height
    // let windowHeight = this.innerHeight;

    // // window scrolltop 
    // let windowScrollTop = this.pageYOffset;

    // // console.log(skillsOffsetTop); //1396
    // // console.log(skillsOuterHeight); //635
    // // console.log(windowHeight); //530

    // console.log(windowScrollTop);

    // if (windowScrollTop +200   > (skillsOffsetTop + skillsOuterHeight - windowHeight)){
    //     console.log("hiii");
    // }
    
    // offsetTop = mean section top zero you can add or sub points
    let nav = document.querySelector(".header-area");
    window.scrollY >= 5 ? nav.style.backgroundColor = "var(--primary-color)": nav.style.backgroundColor = "var(--primary-color-opacity)";


    let up = document.querySelector(".up");  

    up.onclick = function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };      
    if (window.scrollY >= mySocial.offsetTop - 400) {
        myLinks.style.right = "0px"
        myP.style.right = "0px";
        myLogo.style.right = "0px";
    } else {
        myLinks.style.right = "-443px";
        myP.style.right = "-843px";
        myLogo.style.right = "500px";
    }
    if (window.scrollY >= myskills.offsetTop - 400) {

        mySpan.forEach(span => {
            var presentage = span.getAttribute('data-progress');
            var presentageZero = span.getAttribute('data-new');
            setInterval(function () {
                if (presentageZero  != parseInt(presentage)){
                    presentageZero++
                    // Update the attribute using javascript
                    span.setAttribute('data-new', `${presentageZero}`);
                }
        }, 25 );

            // span.setAttribute('data-before', span.getAttribute("data-progress") )
            span.style.width = span.dataset.progress
        });
    }
    if (window.scrollY <= myskills.offsetTop - 400) {
        mySpan.forEach(span => {
            span.style.width = 0;
            span.setAttribute('data-new', `${0}`);
        });
    };
    this.scrollY >= 500?up.classList.add("show"):up.classList.remove("show");

};



// create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {
        // create over lay element
        let overlay = document.createElement("div");
        overlay.classList = 'popup-overlay';

        // append overlay to the body 
        document.body.appendChild(overlay);

        // create the Popup
        let popupBox = document.createElement("div");

        // add class to the popup box 
        popupBox.className='popup-box';


        if (img.alt !== null){

            // create heading 
            let imgHeading = document.createElement("h3");

            // create text for heading
            let imgText = document.createTextNode(img.alt);

            // append text to heading
            imgHeading.appendChild(imgText);

            // appent heading to popup box
            popupBox.appendChild(imgHeading);
        }
        // creat anchor tag 
        let anchorTagForImg = document.createElement("a");
        anchorTagForImg.href = img.dataset.link;
        anchorTagForImg.target = "_blank"

        // create the image 
        let popupImage = document.createElement("img");

        // set Image src
        popupImage.src = img.src;

        // add img inside anchor tag
        anchorTagForImg.appendChild(popupImage);

        // add Image to popup box 
        popupBox.appendChild(anchorTagForImg);

        // append the popup to body 
        document.body.appendChild(popupBox);

        // create close span
        let closeButton = document.createElement("span");

        // create the close button Text 
        let closeButtonText = document.createTextNode("X");

        // appen text to close button 
        closeButton.appendChild(closeButtonText);

        // add class to close button
        closeButton.className = 'close-button';

        // add close button to the popup Box  
        popupBox.appendChild(closeButton);


    });

});

document.addEventListener("click", (e) => {
    if (e.target.className == 'close-button'){
        // remove the current popup
        e.target.parentNode.remove(); //remove parentElement

        // remove overlay
        document.querySelector('.popup-overlay').remove();
    };
    if (e.target.className == 'popup-overlay'){
        // remove overlay
        e.target.remove();
        document.querySelector('.close-button').parentElement.remove();
    };

});



// select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
let allHeaderLinks = document.querySelectorAll(".links-landing li a");

function scrolltosection(elements){
    elements.forEach(ele => {

        ele.addEventListener('click',(e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};
scrolltosection(allHeaderLinks);
scrolltosection(allBullets);

function handelActiveClass(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");

        })
        // add Active Class On self
        ev.target.classList.add("active");
}
let bulletSpan = document.querySelectorAll(".bullets-btns span");

let bulletsContainer = document.querySelector(".nav-bullets");


let bulletLocalItem = localStorage.getItem("bullets_btns");

if (bulletLocalItem !== null){

    bulletSpan.forEach(span => {
        span.classList.remove("active");
    });

    if (bulletLocalItem === "block"){

        bulletsContainer.style.display = 'block';

        document.querySelector(".bullets-btns .yes").classList.add("active");

    } else {

        bulletsContainer.style.display = 'none';

        document.querySelector(".bullets-btns .no").classList.add("active");


    };
};


// show bullets in the sitting box
bulletSpan.forEach(span => {

    span.addEventListener("click" , (e) => {

        if (span.dataset.display === 'Show') {

            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets_btns","block");

        } else {

            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets_btns","none");

        };

        handelActiveClass(e);

    });
});


// reset buttuus 

document.querySelector(".reset-options").onclick = function () {
    localStorage.removeItem("bullets_btns");
    localStorage.removeItem("color_option");
    localStorage.removeItem("mood_toggle");
    localStorage.removeItem("background_option");
    localStorage.removeItem("img_Data");
    

    window.location.reload();
}


// Toggel menu

let togglebtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links-landing");

togglebtn.onclick = function (e) {

    e.stopPropagation();
    this.classList.toggle("menu-active");
    tLinks.classList.toggle("open");
};
// tLinks.onclick = function (e) {
//     e.stopPropagation();
// };


document.addEventListener('click', function(e){
    if(e.target !== togglebtn){
        if (tLinks.classList.contains("open")){
            togglebtn.classList.toggle("menu-active");
            tLinks.classList.toggle("open");
        }
    };
});


