function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return ("nom : "+ this.nom +", prénom : " + this.prenom + ", pseudo : " + this.pseudo);
    }
}

jules = new Personne('Jules', 'LEMAIRE', 'jules77');
paul  = new Personne('Paul', 'LEMAIRE', 'paul44');

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

console.log(paul.nom);
console.log(paul.prenom);
console.log(paul.pseudo);
console.log(paul.getNomComplet());

function afficherPersonne(personne){
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}

afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = "jules44" ;
afficherPersonne(jules);

console.log(jules.age);

Personne.prototype.age = "NON RENSEIGNE";

console.log(jules.age);

jules.age = 30 ;

console.log(jules.age);

Personne.prototype.getInitiales = function(){
    return (this.nom.charAt(0) + this.prenom.charAt(0));
}

console.log(jules.getInitiales());

robert = {
    prenom : "Robert", 
    nom : "LEPREFET", 
    pseudo : "robert77", 
    getNomComplet : function(){
        return("nom : "+ this.nom 
        +", prénom : " + this.prenom 
        + ", pseudo : " + this.pseudo);
    }
}

afficherPersonne(robert);


function Client (nom, prenom, pseudo, numeroClient){
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function(){
        return this.numeroClient + this.nom + this.prenom;
    }
}

steve = new Client('Steve', 'LUCAS', 'steve44', 'A01');
afficherPersonne(steve);

console.log(steve.numeroClient);

console.log(steve.getInfos());