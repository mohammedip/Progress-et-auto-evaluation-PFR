// Difficile 

// 8--

function someTableau(tableau){
    let somme=0;
    for(let i=0;i<tableau.length;i++){

         somme += tableau[i];
    }
    console.log(somme);
}

someTableau([14,25,8,7,6]);

// 9 --

// using boucle

function inverserChaine(chaine){

    let inverser_chaine= "";

    for(let i=chaine.length-1;i>=0;i--){

        inverser_chaine+=chaine[i];
    
    }
    return inverser_chaine;
}

console.log(inverserChaine("mohammedReida"));

// 10 --

function estPalindrome(chaine){

    let inverser_chaine  = inverserChaine(chaine);

    if (inverser_chaine === chaine){
        return true;
    }else{
        return false;
    }

}

 console.log(estPalindrome("mohammed"));
 console.log(estPalindrome("radar"));

