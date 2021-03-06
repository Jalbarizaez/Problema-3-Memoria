import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  private _listaJugadores: Array<Jugador>;
  
  constructor() {
    this._listaJugadores = [];
  }

  public get jugadores(): Array<Jugador> {
    return this._listaJugadores;
  }

  public agregaJugador(nomJugador: string): void {
    this._listaJugadores.push(new Jugador(nomJugador));
  }
}