import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../services/contato.service';
import { NgIf } from '@angular/common';

@Component({
selector: 'app-visualizar',
standalone: true,
imports: [NgIf],
templateUrl: './visualizar.component.html'
})
export class VisualizarComponent implements OnInit {
id: string | null = null;
contato: any = null;
referencia: string = '';

constructor(
    private route: ActivatedRoute,
    private router: Router,
    public contatoService: ContatoService
  ) { }

  ngOnInit() {
    // CAPTURA PARÂMETRO DA URL (ID)
    this.id = this.route.snapshot.paramMap.get('id');

    // CAPTURA QUERYPARAMS (COMO PEDIDO EM SALA)
    this.route.queryParams.subscribe(params => {
      this.referencia = params['ref'];
      console.log('QueryParams capturados:', params);
    });

    // BUSCA CONTATO PELO ID
    if (this.id) {
      this.contato = this.contatoService.findAll().find(
        c => c.id === parseInt(this.id!)
      );
    }
  }

  voltarParaLista(): void {
    this.router.navigate(['/lista']);
  }
}
