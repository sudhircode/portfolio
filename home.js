// -------------for color changing slider----------
document.getElementById('slide').addEventListener("click", f1)
function f1() {
    document.getElementById('slider').classList.toggle('slider');
    document.getElementById('head').classList.toggle('bg-color-main');
    const anchorTags = document.getElementsByTagName("a");
    for (let i = 0; i < anchorTags.length; i++) {
        if (anchorTags[i].style.color === "black") {
            anchorTags[i].style.color = "white";
        } else {
            anchorTags[i].style.color = "black";
            anchorTags[i].style.opacity = 1;
        }
    }
    document.getElementById('skill').classList.toggle('bg-color-main');
    document.getElementById('main').classList.toggle('bg-color-main');
    document.getElementById('article').classList.toggle('bg-color-main');
    document.getElementById('about-my-work').classList.toggle('bg-color-main');
    document.getElementById('summary').classList.toggle('bg-color-main');
    document.getElementById('my-projects').classList.toggle('bg-color-main');
    document.getElementById('footer1').classList.toggle('bg-color-main');
    document.getElementById('slider').classList.toggle('slide-black');

}
// ----------for menu-nav----------
document.getElementById('menu').addEventListener("click", f2)
function f2() {
    document.getElementById('menu-nav').classList.toggle('menu-nav-transfrom');
}
document.getElementById('x').addEventListener("click", f3)
function f3() {
    document.getElementById('menu-item').classList.toggle('slide-menu');
}
function f3() {
    document.getElementById('nav').classList.add('nav-transform');
    document.getElementById('about-me').classList.add('about-me-transform');
}
function f5() {
    const a = document.querySelectorAll('.hide');
    let i = 0;
    document.getElementById('btn-show').style.display = "none";

    function removeClass() {
        a[i].classList.add('show-class');
        if (i < a.length - 1) {
            i++;
            setTimeout(removeClass, 500);
        }
        else {
            document.getElementById('btn-hide').style.display = "block";
        }
    }
    removeClass();
}
function f6() {
    const a = document.querySelectorAll('.hide');
    let i = 0;
    document.getElementById('btn-hide').style.display = "none";

    function removeClass() {
        a[i].classList.remove('show-class');
        if (i < a.length - 1) {
            i++;
            setTimeout(removeClass, 500);
        }
        else {
            document.getElementById('btn-show').style.display = "block"; f
        }
    }
    removeClass();
}

// ---------body-onload------------
function load1() {
    document.getElementById('article').style.transform = 'translateY(0px)';
    document.getElementById('head').classList.add('header-anm');
    document.getElementById('about-me').style.scale = "1";
    document.getElementById('about-me-img1').style.scale = "1";
}
function mouseOver() {
    document.getElementById('small').classList.add('move');
}
function mouseOut() {
    document.getElementById('small').classList.remove('move');
}
// ----------------projects animation---------
function f8() {
    window.scrollTo({ top: 0 });
}
function showAlertOnScroll() {
    if (window.scrollY >= 400) {
        document.getElementById('click').style.display = "block";
    }
    else {
        document.getElementById('click').style.display = "none";
    }
    const div2 = document.querySelector('.scroll-anim');

    if (isElementInViewport(div2)) {
        div2.classList.add('visible');
    } else {
        div2.classList.remove('visible');
    }
}
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return (rect.top >= 0 && rect.bottom <= windowHeight);
}

// document.addEventListener('scroll', function () {
//     alert("hello");
    
// });