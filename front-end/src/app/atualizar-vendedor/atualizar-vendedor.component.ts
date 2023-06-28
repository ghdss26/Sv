import { VendedorServiceService } from './../vendedor-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendedor } from '../vendedor';

@Component({
  selector: 'app-atualizar-vendedor',
  templateUrl: './atualizar-vendedor.component.html',
  styleUrls: ['./atualizar-vendedor.component.scss']
})
export class AtualizarVendedorComponent implements OnInit {

  constructor(private activeRouter: ActivatedRoute,
      private vendedorService: VendedorServiceService,
      private router : Router) {}

  id!: string;
  vendedor: Vendedor = new Vendedor();

  ngOnInit(): void {

    this.id = this.activeRouter.snapshot.params['id'];

    console.log(this.id);

    this.vendedorService.getVendedorById(this.id).subscribe(data => {

      this.vendedor = data;
    })
  }

  atualizarVendedorData() {

    this.vendedorService.atualizarVendedorData(this.vendedor).subscribe(data=> {

      alert("Vendedor atualizado com sucesso");

      this.router.navigate(['/vendedores'])

    }, error=> alert("Desculpe Vendedor não Atualizado"))

  }
}
