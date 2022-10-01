import { Component, OnInit } from '@angular/core';
import { Entree } from 'src/app/shared/interfaces/entree';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public entryList: Entree[];

  constructor() {
    this.entryList = [
      {
        title: 'Introducción a Angular',
        abstract: 'En esta lección realizaremos una pequeña introducción al mundo de desarrollo con Angular'
      },
      {
        title: 'Typescript como lenguaje para Angular',
        abstract: 'Breve recorrido por el lenguaje de Typescript como base para desarrollar en Angular'
       },
      {
        title: 'Componentes en Angular',
        abstract: 'Aprenderemos a usar los componentes en Angular y el porqué de su importancia'
       }
    ];
  }

  ngOnInit(): void {
  }

  public showTitle(title: string): void {
    alert(`Entrada seleccionada: ${title}.`);
  }

}
