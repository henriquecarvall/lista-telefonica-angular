import { Injectable } from '@angular/core';

export interface Contato {
id?: number;
nome: string;
telefone: string;
}

@Injectable({
providedIn: 'root'
})
export class ContatoService {
listaContatos: Contato[] = [];
private id: number = 0;

constructor() { }

  add(contato: Contato): void {
    contato.id = this.proximoid();
    this.listaContatos.push(contato);
  }

  findAll(): Contato[] {
    return this.listaContatos;
  }

  private proximoid(): number {
    return this.id++;
  }
}
