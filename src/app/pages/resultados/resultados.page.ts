import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
  private objParams: any;  // Parámetros proporcionados desde la vista anterior
  public ganador: Jugador;

  constructor(private router: Router) { 
    this.objParams = this.router.getCurrentNavigation().extras.state;
  }

  async ngOnInit() {
    console.log(this.objParams);
    this.ganador = this.objParams?.ganador;
  }

}
