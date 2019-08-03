'use strict';
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const btn = document.querySelector('.btn');
const filmList = document.querySelector('.film-list');


function drawList() {
    filmList.innerHTML=`<li class="item">${inception}</li><li class="item">${theButterFlyEffect}</li><li class="item">${eternalSunshineOfTheSM}</li><li class="item">${blueVelvet}</li><li class="item">${split}</li>`
}
btn.addEventListener('click',drawList);

const item = document.querySelector ('.item');

console.log(item);


// Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película.