// variables actions de l'utilisateur
var button = document.getElementById('submit');
var form = document.getElementById('form');
var replayBtn = document.getElementById('replay-btn');
var champPrompt = document.getElementById('champPrompt');
var msg = document.getElementById('msg');


// constante/ nb entier random par l'ordinateur
const secretNb = Math.floor(Math.random() * 100 + 1);

// nb d'essais possibles
var attemps = 5 ;

// prompt pour afficher nb de tentative max
if(attemps == 5){
    champPrompt.innerHTML = ('Vous avez ' + attemps + ' chances.');
}

// fonction de comparaison entre les 2 nbs lorsque l'utilisateur clique sur le bouton valider
button.onclick = function(){

    const input = document.getElementById("input");
    
    //si nb différent de 
    if(input.value != ""){
        
        //si nb secret est plus grand que la valeur saisie par l'utilisateur (valeur plus grande que 0) 
        if(input.value < secretNb && input.value > 0){
            alert('Le nombre est plus grand que ' + input.value + ' .');
            
            
        //si nb secret est plus petit que la valeur saisie par l'utilisateur (valeur plus petite que 100)
        }else if(input.value > secretNb && input.value < 100){
            alert('Le nombre est plus petit que ' + input.value + ' .');
        }
        
         // pour décrémenter le nb d'essai à chaque tentative
        attemps--;
        
        // si plus d'essai  
        if (attemps == 0 && input.value != secretNb) {
            alert('Dommage ! Vous avez perdu, il fallait trouver le nombre ' + secretNb + ' !');
            form.style.display = 'none';
            msg.style.display = 'none';
            champPrompt.style.display ='none';
            replayBtn.style.display = 'block';
        }
        
        // si nb trouvé
        if(input.value == secretNb){
            alert('Bravo ! Vous avez gagné, il fallait trouver le nombre ' + secretNb + ' !');
            form.style.display = 'none';
            msg.style.display = 'none';
            champPrompt.style.display ='none';
            replayBtn.style.display = 'block';
        }
        
        // si nb plus petit que 0 ou plus grand que 100
        if(input.value < 1 || input.value > 100) {
            alert('Le nombre ' + input.value + ' n\'est pas valide, veuillez ressaisir un nombre entre 1 et 100 !')
        }
        
     // si valeur saisie est autre chose qu'un nb ou champ laissé vide   
    }else{
        alert('Le champ est vide ou non valide, veuillez ressaisir un nombre entre 1 et 100 ! ');
    }
    
    // affiche nb d'essais restants
    if (attemps != 0 && input.value != secretNb){
        champPrompt.innerHTML = ('Il vous reste encore ' + attemps + ' chance(s).');
    }
}