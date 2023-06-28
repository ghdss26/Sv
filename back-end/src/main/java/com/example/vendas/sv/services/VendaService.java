package com.example.vendas.sv.services;

import com.example.vendas.sv.dto.request.VendaRequest;
import com.example.vendas.sv.dto.response.VendaResponse;
import com.example.vendas.sv.models.Venda;
import com.example.vendas.sv.repository.VendaRepository;
import com.example.vendas.sv.repository.VendedorRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class VendaService {

    @Autowired
    private VendaRepository repository;

    @Autowired
    private VendedorRepository vendedorRepository;

    public void cadastrarVenda (VendaRequest request) {

        Venda venda = Venda.of(request);
        venda.setVendedor(vendedorRepository.findById(request.getVendedorId()).orElse(null));
        repository.save(Venda.of(request));
    }

    public List<VendaResponse> buscarVendas() {

        return VendaResponse.of(repository.findAll());
    }

    @Transactional
    public VendaResponse atualizarVenda(VendaRequest request, Integer id) {

        Optional<Venda> optionalVenda = repository.findById(id);

        if (optionalVenda.isPresent()) {

            Venda venda = optionalVenda.get();

            venda.setValor(request.getValor());
            venda.setVendedor(vendedorRepository.findById(request.getVendedorId()).orElse(null));

            return VendaResponse.of(repository.save(venda));

        } else {

            return null;
        }

    }

    public void deletarVenda(Integer id) {

        repository.deleteById(id);
    }

    public Venda buscarPorId(Integer id) {
        return repository.findById(id).orElse(null);
    }
}
