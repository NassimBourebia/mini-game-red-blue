// const titre = document.getElementById('titre').style.color ="green"; 

//Je sélectionne et je stocke
const btnRed = document.getElementById('btn-red'); 
const btnBlue = document.getElementById('btn-blue');
let titre = document.getElementById('titre');
titre.style.color = "green";
let compteur = 0; 


//Je soumets le cercle rouge à une action 
btnRed.addEventListener('click', function () {

    add()
})
btnBlue.addEventListener('click', function () {
    add();
})

setTimeout(function() {
    console.log('fin du chrono !')
    btnRed.remove();
    btnBlue;remove();
}, 10000);


function add() { 

    compteur = compteur + 1;
    console.log(compteur, "compteur après incrémentation");
    titre.innerText = compteur;

};


