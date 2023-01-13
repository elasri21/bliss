const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const goUp = document.querySelector(".go-up");
toggleMenu.addEventListener("click", function() {
    if(this.classList.contains("clicked")){
        this.classList.remove("clicked");
        nav.style.display = "none";
    } else {
        this.classList.add("clicked");
        nav.style.display = "block";
    }
});

//
window.addEventListener("scroll", function() {
    if(this.scrollY == 0) {
        header.style.backgroundColor = "#F3F4F9";
        goUp.style.opacity = "0";
    }else if(this.scrollY > 500) {
        header.style.backgroundColor = "#ffffff";
        goUp.style.opacity = "1";
    }
});


// panels
const questions = Array.from(document.querySelectorAll(".panel h3"));
const answers = Array.from(document.querySelectorAll(".panel p"));
questions.forEach(q => {
    q.addEventListener("click", function() {
        for(let i = 0; i < questions.length; i++) {
            questions[i].classList.remove("active");
        }
        answers.forEach(answer => answer.classList.add("hide"));
        if(this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            this.classList.add("active");
            this.nextElementSibling.classList.remove("hide");
        }
    });
});

//
const bullets = Array.from(document.querySelectorAll(".bullet"));
const reviews = Array.from(document.querySelectorAll(".review"));
bullets.forEach(bullet => {
    bullet.addEventListener("click", function() {
        for(let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove("active");
        }
        reviews.forEach(review => {
            if(this.id == review.dataset.id) {
                review.classList.remove("hide");
            } else {
                review.classList.add("hide");
            }
        })
        this.classList.add("active");
    });
});
