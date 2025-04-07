// Moyen

//  8-
function estAdult(age){

    if(age>=18){
        return true;
    }else{
        return false;
    }
}

console.log(estAdult(15));
console.log(estAdult(21));


//  9-


function jour(jourNumber){
    switch (jourNumber) {
        case 1:
            return "Lundi";
        case 2:
            return "Mardi";
        case 3:
            return "Mercredi";
        case 4:
            return "Jeudi";
        case 5:
            return "Vendredi";
        case 6:
            return "Samedi";
        case 7:
            return "Dimanche";   
        default:
            return "Not a valide day number";               
    }
}

console.log(jour(2));
// console.log(jour(8));
// console.log(jour(5));

//  10-

function pairOuImpair(number){

    if(number){
        if(number % 2 == 0){
            return "pair"
        }else if(number % 2 != 0){
            return "impair"
        }
    }else {
        return "null"
    }
}

console.log(pairOuImpair(8));
// console.log(pairOuImpair(5));
// console.log(pairOuImpair());

//  11-

function maxTrois(a, b, c){
    let max=a;

    if(b>a){
        max=b
    }
    if(c>a || ( max==b && c>b ) ){
        max=c
    }

    return max

}

console.log(maxTrois(154, 17, 19));

//  Difficile

//  8-

function pairOuImpairFromUser(){

let input = prompt("enter a number : ")
let number = Number(input);

 console.log(pairOuImpair(number)) ;
}

// pairOuImpairFromUser()

//  9-

function calculatrice(a, b, operation){
    let result;
    switch(operation){
        case '-':
            result=a-b;
            break;
        case '+':
            result=a+b;
            break;
        case '*':
            result=a*b; 
            break;
        case '/':
            result=a/b;  
            break; 
    }
    return result;
}

console.log(calculatrice(10, 5,'-'))