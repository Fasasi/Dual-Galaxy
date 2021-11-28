const navBarMenu = document.getElementById('navBar');
const navBarHand = document.querySelector('.fa-bars');

const  toggleBarHand = () => {
    navBarMenu.classList.toggle('visible');
};

navBarHand.addEventListener('click', toggleBarHand);
