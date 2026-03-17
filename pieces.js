// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

////////////////////Création du web/////////////////////////////////////
const article = pieces[0];

//Créer la balise image
const imageElement = document.createElement("img");
imageElement.src = article.image;
//Créer la balise h2
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
//Créer les balises paragraphe
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie;
//Add by me
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description;

const stockElement = document.createElement("p")
stockElement.innerText = article.disponibilite ? "En stock:" : "Rupture de stock";
////////////////////////////////////////////////////

//nullish
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
descriptionElement.innerText = article.description ?? "(Pas de description pour le moment)";


//////////////////////// Rattachement AppenChild ///////////////////////
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);
