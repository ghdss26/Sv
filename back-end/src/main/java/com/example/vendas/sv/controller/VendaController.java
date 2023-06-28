package com.example.vendas.sv.controller;

import com.example.vendas.sv.dto.request.VendaRequest;
import com.example.vendas.sv.dto.response.VendaResponse;
import com.example.vendas.sv.models.Venda;
import com.example.vendas.sv.services.VendaService;
import com.example.vendas.sv.services.VendedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController

@RequestMapping("venda")
public class VendaController {

    @Autowired
    private VendaService service;

    @Autowired
    private VendedorService vendedorService;

    @PostMapping
    public void cadastrar(@RequestBody VendaRequest request) {

        service.cadastrarVenda(request);
    }

    @GetMapping
    public List<VendaResponse> listar() {


        return service.buscarVendas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<VendaResponse> getVendaById(@PathVariable Integer id) {
        Venda venda = service.buscarPorId(id);
        if (venda != null) {
            VendaResponse vendaResponse = VendaResponse.of(venda);
            return ResponseEntity.ok(vendaResponse);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public void deletarVenda(@PathVariable Integer id) {

        service.deletarVenda(id);
    }

    @PutMapping("/{id}")
    public VendaResponse atualizarVenda(@RequestBody VendaRequest request, @PathVariable Integer id) {

        VendaResponse vendaResponse = service.atualizarVenda(request, id);
        if (vendaResponse != null) {
            return vendaResponse;
        } else {
            return null;
        }
    }
}
