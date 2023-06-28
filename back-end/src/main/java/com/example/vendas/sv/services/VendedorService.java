package com.example.vendas.sv.services;

import com.example.vendas.sv.dto.request.VendedorRequest;
import com.example.vendas.sv.dto.response.VendedorResponse;

import com.example.vendas.sv.models.Vendedor;

import com.example.vendas.sv.repository.VendedorRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class VendedorService {

    @Autowired
    private VendedorRepository repository;

    public void cadastrarVendedor (VendedorRequest request) {

        repository.save(Vendedor.of(request));
    }

    public List<VendedorResponse> buscarVendedores() {

        return VendedorResponse.of(repository.findAll());
    }

    public Vendedor buscarPorid(Integer id) {

        return repository.findById(id).get();
    }

    @Transactional
    public VendedorResponse atualizarVendedor(VendedorRequest request, Integer id) {

        var vendedor = buscarPorid(id);
        BeanUtils.copyProperties(Vendedor.of(request), vendedor, "id");

        return VendedorResponse.of(repository.save(vendedor));
    }

    public void deletarVendedor(Integer id) {

        var vendedor = buscarPorid(id);
        repository.delete(vendedor);
    }

}
