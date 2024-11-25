import { Component, OnInit } from '@angular/core';
import { CatalogItemComponent } from "./catalog-item/catalog-item.component";
import { CatalogService } from './catalog.service';
import { Recipe } from '../types/recipe';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CatalogItemComponent],
  providers: [CatalogService],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }
}
