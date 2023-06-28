import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListarVendedorComponent } from './listar-vendedor/listar-vendedor.component';
import { CriarVendedorComponent } from './criar-vendedor/criar-vendedor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AtualizarVendedorComponent } from './atualizar-vendedor/atualizar-vendedor.component';
import { CriarVendaComponent } from './criar-venda/criar-venda.component';
import { ListarVendaComponent } from './listar-venda/listar-venda.component';
import { AtualizarVendaComponent } from './atualizar-venda/atualizar-venda.component';


@NgModule({
  declarations: [
    AppComponent,
    CriarVendedorComponent,
    ListarVendedorComponent,
    AtualizarVendedorComponent,
    CriarVendaComponent,
    ListarVendaComponent,
    AtualizarVendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
