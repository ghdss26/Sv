import { VendaServiceService } from './../venda-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Venda } from '../venda';

import { VendedorServiceService } from './../vendedor-service.service';

@Component({
  selector: 'app-atualizar-venda',
  templateUrl: './atualizar-venda.component.html',
  styleUrls: ['./atualizar-venda.component.scss']
})
export class AtualizarVendaComponent implements OnInit{

  id!: string;

  constructor(private ActivatedRouter : ActivatedRoute,
    private vendaService: VendaServiceService,
    private vendedorService: VendedorServiceService,
    private router: Router) {}

  venda: Venda = new Venda();
  vendedores: any[] = [];

  ngOnInit(): void {

    this.ActivatedRouter.paramMap.subscribe(params => {
      this.id = params.get('id') ?? '';
    });

     // Busca a venda pelo ID e atribui à propriedade 'venda'
  this.vendaService.getVendaById(this.id).subscribe(
    (venda: Venda) => {
      this.venda = venda;
    },
    (error) => {
      console.log(error);
    }
  );

    this.vendedorService.getVendedores().subscribe(

      ( vendedores: any) => {

        console.log(vendedores);
        this.vendedores.push(...vendedores);
      },
      (error) => {

        console.log(error);
      }
    );
  }

  atualizarVendaData() {

    console.log(this.venda);
    this.vendaService.atualizarVenda(this.id, this.venda).subscribe(data=> {

      alert("Venda Inserida com sucesso ")
      this.ListarVendaPagina();

    }, error=>alert("Desculpe deu erro na sua atualização de venda"))
  }

  ListarVendaPagina() {

    this.router.navigate(['/vendas']);
  }

}
