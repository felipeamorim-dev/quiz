import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz';

  public ativo: boolean = true;
  public resultado: number = 0;

  public show(event: any){
    this.resultado = event;
    console.log(event)
    this.ativo = !this.ativo;
  }

  public getResultado(){
    return this.resultado;
  }

  public reiniciar(event: any){
    this.resultado = 0;
    this.ativo = !this.ativo;
  }
}
