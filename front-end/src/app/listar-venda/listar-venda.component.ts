
import { VendaServiceService } from './../venda-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venda } from '../venda';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-listar-venda',
  templateUrl: './listar-venda.component.html',
  styleUrls: ['./listar-venda.component.scss']
})

export class ListarVendaComponent implements OnInit{
[x: string]: any;

  vendas : Venda[] = [];
  vendasFormatadas: any[] = [];

  constructor(private vendaServiceService: VendaServiceService,
    private router: Router) {}

    ngOnInit(): void {
      this.vendaServiceService.ListarVenda()
        .pipe(
          tap(() => console.log('Dados carregados com sucesso')),
        )
        .subscribe(
          data => {
            this.vendas = data;
          },
          error => {
            console.error('Ocorreu um erro ao carregar os dados: ', error);
          }
        );
    }

    atualizarVenda(id:string) {

      console.log(id);
      this.router.navigate(["atualizar-venda", id]);
    }

    deletarVenda(id:string) {

      if(confirm('Tem certeza que deseja deletar esta venda ?')) {

        this.vendaServiceService.deletarVenda(id).subscribe(() => {

          alert('Venda excluida com sucesso !');
          this.router.navigate(['/vendedores']);
        },
        (error: any) => {

          alert('Erro ao excluir venda ')

        });
      }
    }

}
