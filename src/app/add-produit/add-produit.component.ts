import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.modele';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})

export class AddProduitComponent {
  newProduit = new Produit();
  newIdCat! : number;
  categories! : Categorie[];
  newCategorie! : Categorie;

  message!: string;

  constructor(private produitService: ProduitService,private router :Router) { }
  ngOnInit() {
    this.categories = this.produitService.listeCategories();
    }

  addProduit(){
    this.newCategorie =
    this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit);
    this.router.navigate(['produits']);
    //this.message = "produit " + this.newProduit.nomProduit + " ajouter avec succes"
  }
}
