'use strict'
// Modal contact

var abrir = document.querySelector('#abrir');
var modal = document.querySelector('#modal_contacto');
var cerrar = document.querySelector('#close');
var responsive = document.querySelector('#responsiveBtn');
var menuInResponsive = document.querySelector('#menu');

// Modal elements
abrir.addEventListener('click', function() {
    modal.style.display = 'block';
});

cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});

// Responsive menu



responsive.addEventListener('click', function(){
    menuInResponsive.style.opacity = '1';
    
});




