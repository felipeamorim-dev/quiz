import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  @Input() resultado: number = 0;
  @Output() reiniciar = new EventEmitter<boolean>();

  public percentual: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculaPercentual();
  }

  private calculaPercentual(){
    this.percentual = this.resultado * 10;
  }

  public home(){
    this.limpar();
    this.reiniciar.emit(true);
  }

  private limpar(){
    this.resultado = 0;
    this.percentual = 0;
  }
}
