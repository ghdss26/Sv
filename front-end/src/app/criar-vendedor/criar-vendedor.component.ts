import { VendedorServiceService } from './../vendedor-service.service';
import { Vendedor } from './../vendedor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-vendedor',
  templateUrl: './criar-vendedor.component.html',
  styleUrls: ['./criar-vendedor.component.scss']
})
export class CriarVendedorComponent implements OnInit{

  vendedor: Vendedor = new Vendedor();

  constructor(private vendedorService: VendedorServiceService,
      private router: Router) {
  }

  ngOnInit(): void {

  }

  addVendedorData(){
    this.vendedorService.addVendedor(this.vendedor).subscribe(data=> {

      alert("Vendedor Data inserido com sucesso")
      this.ListarVendedorPagina();

    }, error=>alert("Desculpe deu erro o seu cadastro de vendedor"))
  }

  ListarVendedorPagina() {

    this.router.navigate(['/vendedores'])
  }
}
