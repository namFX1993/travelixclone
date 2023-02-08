"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Sticky header
const headerMenu = $(".header__menu");
const headerTopBar = $(".header__topbar");
const scrollFunction = function () {
    if(
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ) {
        headerMenu.classList.add("scroll");
        headerTopBar.classList.add("hide");
        $("#inputSearch").classList.add("d-lg-none");
    }
    else {
        headerMenu.classList.remove("scroll");
        headerTopBar.classList.remove("hide");
        $("#inputSearch").classList.remove("d-lg-none");
        
    }
}
window.addEventListener("scroll", scrollFunction);


//Scroll Top
const scrollTop = () => {
    const header = $(".header");
    header.scrollIntoView({behavior:"smooth"});
};

const scrollBtn = $(".scroll__top");
scrollBtn.addEventListener("click", scrollTop);
window.addEventListener("scroll", showScrollBtn);

function showScrollBtn () {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ){
        scrollBtn.classList.remove("d-none");
        //scrollBtn.style.display = "block";
    }
    else {
        scrollBtn.classList.add("d-none");
     //   scrollBtn.style.display = "none";
    }
    
}
// Active link header

const listLink = location.href;
const listItem = $$(".header__nav__container--list a");
let listLength = listItem.length;

let i = 0;
for (i; i < listLength; i++) {
    if (listItem[i].href === listLink) {
        listItem[i].className = "active";
    }
}

// Active link menu when click
const links = $$(".header__nav__container--list a");
const add = function() {
    $(".header__nav__container--list a.active").classList.remove("active");
    this.classList.add("active");
};

links.forEach((link) => {
    link.addEventListener("click", add);
    
});

// Active Header Search Place
const headerSearchBtn = $(".header__search__btn");
const showSearch = function () {
    $("#inputSearch").classList.toggle("d-md-inline-block");
};

headerSearchBtn.addEventListener("click", showSearch);

//Open menu for tablet + mobile
const menuOpen = $("#menu__open");
const openMenuTabletMobile = function () {
    $(".header__menu__tablet__mobile").classList.remove("d-none");
    $(".header__menu__t__m__overlay").classList.add("open");
    $(".header__menu__t__m__content").classList.add("open");
}
menuOpen.addEventListener("click", openMenuTabletMobile);

// Close Menu
const closeMenu = $("#menu-close");
const closeMenuTabletMobile = function () {
    $(".header__menu__t__m__overlay").classList.remove("open");
    $(".header__menu__t__m__content").classList.remove("open");
}
closeMenu.addEventListener("click", closeMenuTabletMobile);

// Active search tab
const searchTab = $$(".search__tab");
const addActiveTab = function() {
    $(".search__tab.active").classList.remove("active");
    this.classList.add("active");
};
searchTab.forEach((tab) => {
    tab.addEventListener("click", addActiveTab);
});



