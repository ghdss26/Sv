import { AtualizarVendaComponent } from './atualizar-venda/atualizar-venda.component';
import { CriarVendaComponent } from './criar-venda/criar-venda.component';
import { ListarVendaComponent } from './listar-venda/listar-venda.component';

import { AtualizarVendedorComponent } from './atualizar-vendedor/atualizar-vendedor.component';
import { CriarVendedorComponent } from './criar-vendedor/criar-vendedor.component';
import { ListarVendedorComponent } from './listar-vendedor/listar-vendedor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Rotas de Vendedores
  {path:'vendedores', component: ListarVendedorComponent},
  {path: 'addVendedores', component: CriarVendedorComponent},
  {path: '', component: ListarVendedorComponent},
  {path: 'atualizar-vendedor/:id', component: AtualizarVendedorComponent},

  // Rotas de Vendas
  {path: 'vendas', component: ListarVendaComponent},
  {path: 'addVendas', component: CriarVendaComponent},
  {path: 'atualizar-venda/:id', component: AtualizarVendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
