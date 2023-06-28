package com.example.vendas.sv.controller;

import com.example.vendas.sv.dto.request.VendedorRequest;
import com.example.vendas.sv.dto.response.VendedorResponse;
import com.example.vendas.sv.models.Venda;
import com.example.vendas.sv.models.Vendedor;
import com.example.vendas.sv.repository.VendaRepository;
import com.example.vendas.sv.repository.VendedorRepository;
import com.example.vendas.sv.services.VendedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.example.vendas.sv.dto.response.VendedorResponse;
@RestController
@RequestMapping("vendedor")
public class VendedorController {

    @Autowired
    private VendedorService service;

    @Autowired
    private VendedorRepository repository;


    @PostMapping
    public void cadastrar(@RequestBody VendedorRequest request) {

        service.cadastrarVendedor(request);
    }

    @GetMapping
    public List<VendedorResponse> listar() {

        return service.buscarVendedores();
    }

    @GetMapping("/{id}")
    Vendedor getVendendorById(@PathVariable Integer id) {

        return service.buscarPorid(id);
    }

    @DeleteMapping("/{id}")
    public void deletarPaciente(@PathVariable Integer id) {

        service.deletarVendedor(id);
    }

    @PutMapping("/{id}")
    public VendedorResponse atualizarVendedor(@RequestBody VendedorRequest request, @PathVariable Integer id) {

        return service.atualizarVendedor(request, id);
    }


}
