'use strict';

const documentReady = () => {
    const heroTitle = document.querySelector('.hero__title');
    const heroButtonSi = document.getElementById('heroButtonSi');
    const heroButtonNo = document.querySelector('#heroButtonNo');

    const nowZomosNobios = () => {
        alert('💞 Sabia que me ibas a decir que si te amo  💞');
        alert('😱Nuestra Boda es mañana 😱');
        location.href = 'https://youtu.be/7s4pK3s8-lE';
    };

    const evitarKCRompanMyBobo = () => {
        heroButtonNo.style.position = 'absolute';
        heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
        heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
    };

    const partner = prompt('🥰Nombre de la persona a declararse  🥰');
    heroTitle.innerHTML += partner + ' ❤';

    heroButtonSi.addEventListener('click', nowZomosNobios);
    heroButtonNo.addEventListener('mouseover', evitarKCRompanMyBobo);
};

document.addEventListener('DOMContentLoaded', documentReady);