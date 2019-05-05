'use strict'
// Modal contact

var abrir = document.querySelector('#abrir');
var modal = document.querySelector('#modal_contacto');
var cerrar = document.querySelector('#close');

abrir.addEventListener('click', function() {
    
    modal.style.display = 'block';
});

cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});