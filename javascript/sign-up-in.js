const signInBtn = document.querySelector('.sign-in');
const signUpBtn = document.querySelector('.sign-up');
const mainDiv = document.querySelector('.main');
function signUp() {
    mainDiv.style.display = 'none';
    signInBtn.style.display = 'none';
    signUpBtn.style.display = 'flex';
}
function signIn() {

    mainDiv.style.display = 'none';
    signUpBtn.style.display = 'none';
    signInBtn.style.display = 'flex';
}