console.log("01 - Fonctions");

nombre1 = 10;
nombre2 = 20;

function additionner(nb1, nb2){
    return nb1 + nb2;
}

resultat1 = additionner(nombre1,nombre2);
console.log("resultat1 = "+resultat1);

somme = additionner;
resultat2 = somme(nombre1,nombre2);
console.log("resultat2 = " + resultat2);

function multiplier (nb1, nb2) {
    return nb1 * nb2;
}

multiplication = multiplier(nombre1, nombre2);
resultat3 = multiplication;
console.log("resultat3 = " + resultat3);

function afficherOperation(nomOperation, operation,nb1, nb2){
    return console.log (nomOperation + "("+nb1+","+nb2+") = "+ operation(nb1,nb2));
}

function soustraire(nb1,nb2){
    return nb1 - nb2;
}

afficher = afficherOperation("Multiplication", multiplier, 2,3);

afficherOperation("Somme", somme,20,40);

afficherOperation("Multiplication", multiplier,10,20);

afficherOperation("Soustraction", soustraire,15,5);