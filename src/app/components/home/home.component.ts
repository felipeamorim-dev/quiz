import { Questoes } from './../../models/questoes';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import perguntas from './../../../assets/perguntas.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() gameOver = new EventEmitter<number>();

  public ativo: boolean = true;
  public index: number = 0;
  private preview: number = this.index + 1;
  public respostaCertas: number = 0;

  public qs: Questoes[] = perguntas;

  constructor() { }

  ngOnInit(): void {
  }

  public show(): void{
    this.ativo = ! this.ativo;
  }

  public voltar(): void {
    this.limparDados();
    this.show();
  }

  private limparDados(): void{
    this.index = 0;
    this.respostaCertas = 0;
    this.preview = 1;
  }

  private proximo(): number{
    return this.preview;
  }

  public submit(btn: String): void{
    this.verificaResposta(btn);
    if(!this.fimJogo()){
      this.step();
    }else {
      this.telaGameOver();
    }
  }

  private verificaResposta(resposta: String): void{
    if (this.qs[this.index].resposta === resposta) {
        this.respostaCertas++;
    }
  }

  public fimJogo(): boolean{
    if(this.proximo() >= 10){
      return true;
    }else {
      return false;
    }
  }

  private step(){
    if(this.preview < 10){
      this.index++;
    }
    this.preview++;
  }

  private telaGameOver(){
    this.gameOver.emit(this.respostaCertas);
    this.limparDados();
    this.show();
  }
}
