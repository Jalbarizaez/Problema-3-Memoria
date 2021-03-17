import { Component } from '@angular/core';
import { ResultadoTurno } from '../../models/juego';
import { Jugador } from '../../models/jugador';
import { JugadoresService } from '../../services/jugadores.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-juego',
  templateUrl: 'juego.page.html',
  styleUrls: ['juego.page.scss'],
})
export class JuegoPage {
  public jugadores: Array<Jugador> = [];
  public jugadorActual: Jugador;

  constructor(private jugadoresService: JugadoresService, private router: Router) {
    this.inicializaJugadores();
  }

  private inicializaJugadores() {
    this.jugadores = this.jugadoresService.jugadores;
    if (this.jugadores.length <= 0) {
      this.router.navigate(['/inicio']);
    }
    this.jugadorActual = this.jugadores[this.jugadores.length - 1];
  } 

  public chequeaAciertos(resultado: ResultadoTurno): void {
    this.jugadores[resultado.jugador].terminaTurno(resultado.acierto);
  }

  public terminaJuego(): void {
    this.inicializaJugadores();
    this.alertaGanador();
  }

  public cambiaJugador(index: number): void {
    this.jugadorActual = this.jugadores[index];
  }

  private async alertaGanador() {
    const ganador: Jugador = this.encuentraGanador();
    const nextPageParams: NavigationExtras = {
      state: {
        ganador,
      },
    };
   this.router.navigate(['/resultados'], nextPageParams);
  }

  private encuentraGanador(): Jugador {
    let ganador: Jugador = null;
    let maximosAciertos = 0;
    this.jugadores.forEach((jugador) => {
      if (maximosAciertos < jugador.aciertos) {
        ganador = jugador;
        maximosAciertos = jugador.aciertos;
      }
    });
    return ganador;
  }

}
