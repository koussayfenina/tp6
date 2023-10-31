import { Categorie } from "./categorie.modele";

export class Produit{
    idProduit! : number;
    nomProduit! : string;
    prixProduit! : number;
    dateCreation! : Date;
    categorie!:Categorie;
}