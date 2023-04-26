
// FOR CLICKING MENU BUTTON
navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    profile.classList.remove('active');
}


// FOR CLICKING USER BUTTON
profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
    profile.classList.toggle('active');    
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    profile.classList.remove('active');
}

// FOR LOADING

function loading(){
    document.querySelector('.loading').style.display = 'none';
}

// 1000 = 1 second
// 2000 2 seconds

function fadeOut(){
    setInterval(loading, 2000);
}

window.onload = fadeOut;