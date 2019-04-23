disp = console.log;
function disp(texte){
    return afficher(texte);
}

villes =['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function (city){
    disp(city);
})

var lettreADansToutesLesVilles = villes.every(function (city){
   return city.includes('a');
});

disp('lettreADansToutesLesVilles=',lettreADansToutesLesVilles );


var auMoinsUneVilleAvecUnTiret = villes.some(function (city){
    return city.includes('-');
});
disp('auMoinsUneVilleAvecUnTiret=',auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = villes.filter(function (city) {
    return !city.includes('-',' ');
  });

disp('villesSansTiretSansEspace=',villesSansTiretSansEspace);

var villesMajuscule = function (city){
    return city.toUpperCase();
}

var villesSeTerminantParS = function(city){
    return city.endsWith('s');
}

var villesMajusculeSeTerminantParS = villes.filter(villesSeTerminantParS)
.map(villesMajuscule);
disp('villesMajusculeSeTerminantParS=',villesMajusculeSeTerminantParS);