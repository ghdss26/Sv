
import { VendedorServiceService } from './../vendedor-service.service';
import { Vendedor } from './../vendedor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-vendedor',
  templateUrl: './listar-vendedor.component.html',
  styleUrls: ['./listar-vendedor.component.scss']
})
export class ListarVendedorComponent implements OnInit{

  constructor(private vendedorService: VendedorServiceService,
    private router: Router) {}

  vendedores : Vendedor[]=[];

  ngOnInit(): void {

    this.vendedorService.ListarVendedores().subscribe(data=> {

      this.vendedores=data
    })
  }

  atualizarVendedor(id:string) {

    console.log(id);
    this.router.navigate(["atualizar-vendedor", id]);
  }

  deletarVendedor(id: string) {
    if (confirm('Tem certeza que deseja deletar este vendedor?')) {
      this.vendedorService.deletarVendedor(id).subscribe(() => {

        alert('Vendedor excluído com sucesso!');
        this.router.navigate(['/addVendedores']);
      },
      (error: any) => {
        alert('Erro ao excluir vendedor: ');
      });
    }
  }
}
