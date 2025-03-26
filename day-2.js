//Difficile

// 8 - 

class Personne{
    nom
    age

    constructor(nom,age){

        this.nom=nom;
        this.age=age;
    }

    saluer(){
        console.log("Bonjour je m'appele "+ this.nom);
    }
}

// 9-

let personne1 = new Personne("Alice",25);
let personne2 = new Personne("Bob",30);

console.log("name : " + personne1.nom + " age : " + personne1.age);
console.log("name : " + personne2.nom + " age : " + personne2.age);

// 10-
personne1.saluer();
personne2.saluer();