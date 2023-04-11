const titre = document.getElementById('titre').style.color ="green"; 

//Je sélectionne et je stocke
const btnRed = document.getElementById('btn-red'); 
let compteur = 0; 
console.log(compteur, "Compteur au démarrage");

//Je soumets le cercle rouge à une action 
btnRed.addEventListener('click', function(){
    // console.log('cliqué');
    //Ici l'action
    //Incrémenter le compteur de 1 
    compteur = compteur + 1
    console.log(compteur, "compteur après incrémentation");
})