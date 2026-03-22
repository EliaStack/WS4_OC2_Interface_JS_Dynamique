// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

////////////////////Création du web/////////////////////////////////////

for (let i = 0; i < pieces.length; i++) {
    const article = pieces[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");

    //Créer la balise image
    const imageElement = document.createElement("img");
    imageElement.src = pieces[i].image;
    //Créer la balise h2
    const nomElement = document.createElement("h2");
    nomElement.innerText = pieces[i].nom;
    //Créer les balises paragraphe
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${pieces[i].prix} € (${pieces[i].prix < 35 ? "€" : "€€€"})`;

    const categorieElement = document.createElement("p");
    categorieElement.innerText = pieces[i].categorie;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = pieces[i].description;

    const stockElement = document.createElement("p")
    stockElement.innerText = pieces[i].disponibilite ? "En stock:" : "Rupture de stock";

    //nullish
    categorieElement.innerText = pieces[i].categorie ?? "(aucune catégorie)";
    descriptionElement.innerText = pieces[i].description ?? "(Pas de description pour le moment)";


    //////////////////////// Rattachement AppenChild ///////////////////////
    //On met dans l'article
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);

    //On met ce qui est dans l'article dans la balise div .fiches
    sectionFiches.appendChild(pieceElement);
}

// Gestion des boutons
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces); //Créer une copie des pièces

    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });

    console.log(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    console.log(piecesFiltrees)
});

const boutonDecroissant = document.querySelector(".btn-decroissant");
boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces); //Créer une copie des pièces

    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    });
    console.log(piecesOrdonnees);

})

const boutonNoDescription = document.querySelector(".btn-nodesc");
boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description
    });
    console.log(piecesFiltrees)

})











