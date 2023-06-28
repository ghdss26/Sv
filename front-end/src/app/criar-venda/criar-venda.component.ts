import { VendedorServiceService } from './../vendedor-service.service';
import { Router } from '@angular/router';
import { VendaServiceService } from './../venda-service.service';
import { Venda } from './../venda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-venda',
  templateUrl: './criar-venda.component.html',
  styleUrls: ['./criar-venda.component.scss']
})
export class CriarVendaComponent implements OnInit{

  venda: Venda = new Venda();

  vendedores: any[] = [];

  constructor(private vendaService: VendaServiceService,
    private vendedorService: VendedorServiceService,
    private router: Router) {
  }

  ngOnInit(): void {

    this.vendedorService.getVendedores().subscribe(

      vendedores => {

        this.vendedores.push(...vendedores);
      },

      (error: any) => {
        console.error('Erro ao carregar vendedores:', error);
        alert('Não foi possível carregar os vendedores. Tente novamente mais tarde.');
      }
    );
  }

  addVendaData() {
    console.log(this.venda);
    this.vendaService.addVenda(this.venda).subscribe(data=> {

      alert("Venda Inserida com sucesso ")
      this.ListarVendaPagina();

    }, error=>alert("Desculpe deu erro no seu cadastro de venda"))
  }

  ListarVendaPagina() {

    this.router.navigate(['/vendas']);
  }

}
