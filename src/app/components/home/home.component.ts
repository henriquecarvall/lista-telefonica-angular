import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgIf, NgFor } from "@angular/common";
import { ContatoService } from "../../services/contato.service";

@Component({
selector: 'app-home',
standalone: true,
imports: [
FormsModule,
NgIf,
NgFor
],
templateUrl: './home.component.html',
styleUrl: './home.component.css'
})
export class HomeComponent {
labelNovoContato: string = "Adicionar Contato";
nome: string = "";
telefone: string = "";

constructor(public contatoService: ContatoService) { }

  novoContato(): void {
    console.log("Nome: " + this.nome);
    console.log("Telefone: " + this.telefone);

    if (this.nome.trim() === '' || this.telefone.trim() === '') {
      console.log("Campos vazios!");
      return;
    }

    this.contatoService.add({
      nome: this.nome,
      telefone: this.telefone
    });

    console.log(this.contatoService.findAll());

    this.nome = "";
    this.telefone = "";
  }

  removerContato(id: number): void {
    this.contatoService.listaContatos = this.contatoService.listaContatos.filter(
      contato => contato.id !== id
    );
  }
}
