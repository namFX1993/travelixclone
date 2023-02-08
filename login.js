"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Show Hide Password Login
const showPassword = $(".show__password");
const hidePassword = $(".hide__password");
const passwordInput = $("#logInPassword");
const showHidePassword = function() {
    if (passwordInput.type === "password"){
        passwordInput.type = "text";
        showPassword.classList.add("active");
        hidePassword.classList.remove("active");
    } else {
        passwordInput.type = "password";
        showPassword.classList.remove("active");
        hidePassword.classList.add("active");
    }
};

showPassword.addEventListener("click", showHidePassword);
hidePassword.addEventListener("click", showHidePassword);

// Show Hide Input Password Sign Up
const showPasswordSignUp = $(".sign__up__page .show__password");
const hidePasswordSignUp = $(".sign__up__page .hide__password");
const passwordInputSgnUp = $(".sign__up__page #logInPassword");
const showHidePasswordSignUp = function() {
    if (passwordInputSgnUp.type === "password"){
        passwordInputSgnUp.type = "text";
        showPasswordSignUp.classList.add("active");
        hidePasswordSignUp.classList.remove("active");
    } else {
        passwordInputSgnUp.type = "password";
        showPasswordSignUp.classList.remove("active");
        hidePasswordSignUp.classList.add("active");
    }
};

showPasswordSignUp.addEventListener("click", showHidePasswordSignUp);
hidePasswordSignUp.addEventListener("click", showHidePasswordSignUp);

// Check valid password

function isValidPassword(password) {
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;
    return pattern.test(password);
}
passwordInputSgnUp.addEventListener("blur", function() {
    if (!isValidPassword(passwordInputSgnUp.value)){
        $(".sign__up__page .alert__password__invalid").classList.remove("d-none");
    } else {
        $(".sign__up__page .alert__password__invalid").classList.add("d-none");
    }
})


// Show Hide Confirm Password

const showConfirmPassword = $(".sign__up__page .show__confirm__password");
const hideConfirmPassword = $(".sign__up__page .hide__confirm__password");
const passwordConfirm = $(".sign__up__page #confirmPassword");
const showHideConfirmPassword = function() {
    if (passwordConfirm.type === "password"){
        passwordConfirm.type = "text";
        showConfirmPassword.classList.add("active");
        hideConfirmPassword.classList.remove("active");
    } else {
        passwordConfirm.type = "password";
        showConfirmPassword.classList.remove("active");
        hideConfirmPassword.classList.add("active");
    }
}
showConfirmPassword.addEventListener("click", showHideConfirmPassword);
hideConfirmPassword.addEventListener("click",showHideConfirmPassword);

// Check valid confirm password Sign Up

function checkValidConfirmPassword (password, confirmPassword) {
    if (password.value === confirmPassword.value){
        return true;
    } else {
        return false;
    }
}
passwordConfirm.addEventListener("blur", function () {
    if(!checkValidConfirmPassword(passwordInputSgnUp,passwordConfirm)) {
        $(".sign__up__page .alert__confirm__password__invalid").classList.remove("d-none");
    } else {
        $(".sign__up__page .alert__confirm__password__invalid").classList.add("d-none");
    } 
})

// close sign in & sign up page

const closePage = $("#menu-close");
const closePageFunction = function(){
    window.history.back();
};

closePage.addEventListener("click", closePageFunction);

// Trượt từ sign in sang sign up

const signUp = $(".sign__up__now a");
const loginToSignUp = function () {
    $(".login__page").classList.add("active");
    $(".sign__up__page").classList.add("active");
};

signUp.addEventListener("click", loginToSignUp);

const newAccount = $(".new__account");

newAccount.addEventListener("click",loginToSignUp);

// Trượt từ sign up sang sign in

const signIn = $(".sign__in__now a");
const signUpToSignIn = function () {
    $(".login__page").classList.remove("active");
    $(".sign__up__page").classList.remove("active");
};

signIn.addEventListener("click", signUpToSignIn);

// Sign In To Forgot Password

const forgotPassword = $(".forgot__password a");
const toForgotPassword = function () {
    $(".login__form").classList.add("active");
    $(".forgot__password__form").classList.add("active");
};

forgotPassword.addEventListener("click", toForgotPassword);

// Forgot password to set new password

const confirmCode = $(".confirm__code");
const toSetNewPassword = function () {
    $(".forgot__password__form").classList.add("active__2");
    $(".new__password__form").classList.add("active");
};

confirmCode.addEventListener("click", toSetNewPassword);


// Show hide password of set new password

const showNewPassword = $(".new__password__form .show__password");
const hideNewPassword = $(".new__password__form .hide__password");
const newPasswordInput = $(".new__password__form #logInPassword");
const showHideNewPassword = function () {
    if (newPasswordInput.type === "password"){
        newPasswordInput.type = "text";
        showNewPassword.classList.add("active");
        hideNewPassword.classList.remove("active");
    } else {
        newPasswordInput.type = "password";
        showNewPassword.classList.remove("active");
        hideNewPassword.classList.add("active");
    }
};

showNewPassword.addEventListener("click",showHideNewPassword);
hideNewPassword.addEventListener("click",showHideNewPassword);

// Check valid password new password

newPasswordInput.addEventListener("blur", function() {
    if (!isValidPassword(newPasswordInput.value)){
        $(".new__password__form .alert__password__invalid").classList.remove("d-none");
    } else {
        $(".new__password__form .alert__password__invalid").classList.add("d-none");
    }
})


// Show Hide Confirm Password of set new password
const showConfirmNewPassword = $(".new__password__form .show__confirm__password");
const hideConfirmNewPassword = $(".new__password__form .hide__confirm__password");
const newPasswordConfirm = $(".new__password__form #confirmPassword");
const showHideConfirmNewPassword = function() {
    if (newPasswordConfirm.type === "password"){
        newPasswordConfirm.type = "text";
        showConfirmNewPassword.classList.add("active");
        hideConfirmNewPassword.classList.remove("active");
    } else {
        newPasswordConfirm.type = "password";
        showConfirmNewPassword.classList.remove("active");
        hideConfirmNewPassword.classList.add("active");
    }
}
showConfirmNewPassword.addEventListener("click", showHideConfirmNewPassword);
hideConfirmNewPassword.addEventListener("click",showHideConfirmNewPassword);

// Check valid confirm new password

newPasswordConfirm.addEventListener("blur", function () {
    if(!checkValidConfirmPassword(newPasswordInput,newPasswordConfirm)) {
        $(".new__password__form .alert__confirm__password__invalid").classList.remove("d-none");
    } else {
        $(".new__password__form .alert__confirm__password__invalid").classList.add("d-none");
        confirmNewPassword.addEventListener("click", forgotPasswordToSignIn);
    } 
});

// Set New PassWord to Sign In

const confirmNewPassword = $(".confirm__new__password");
const forgotPasswordToSignIn = function () {
    $(".login__form").classList.remove("active");
    $(".forgot__password__form").classList.remove("active");
    $(".forgot__password__form").classList.remove("active__2");
    $(".new__password__form").classList.remove("active");
};

// confirmNewPassword.addEventListener("click", forgotPasswordToSignIn);

const backToSignIn = $(".back__to__signIn");
backToSignIn.addEventListener("click",forgotPasswordToSignIn);
// if (checkValidConfirmPassword(newPasswordInput,newPasswordConfirm)) {
//     backToSignIn.addEventListener("click", forgotPasswordToSignIn);
// } else{

// };
