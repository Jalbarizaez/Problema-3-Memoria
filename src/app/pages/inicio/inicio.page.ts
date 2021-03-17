import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../services/jugadores.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

   constructor(public jugadoresService: JugadoresService) { }

    ngOnInit() { }
  
    public agregaJugador(nombre: string): void {
      this.jugadoresService.agregaJugador(nombre);
    }
}
