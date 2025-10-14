import { Component } from '@angular/core';
import { ContatoService } from '../services/contato.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
selector: 'app-lista',
standalone: true,
imports: [NgFor],
templateUrl: './lista.component.html'
})
export class ListaComponent {

constructor(
    public contatoService: ContatoService,
    private router: Router
  ) { }

  // NAVEGAÇÃO SIMPLES
  visualizarContato(id: number): void {
    this.router.navigate(['/visualizar', id]);
  }

  // NAVEGAÇÃO COM QUERYPARAMS (COMO PEDIDO EM SALA)
  visualizarComQueryParams(id: number): void {
    this.router.navigate(
      ['/visualizar', id],
      { queryParams: { ref: 'Estou visualizando o contato: ' + id } }
    );
  }

  // NAVEGAÇÃO BY URL
  visualizarByUrl(id: number): void {
    this.router.navigateByUrl('/visualizar/' + id);
  }

  voltarParaHome(): void {
    this.router.navigate(['/home']);
  }

  getContatos() {
    return this.contatoService.findAll();
  }
}
