package com.example.vendas.sv.dto.response;

import com.example.vendas.sv.models.Vendedor;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
public class VendedorResponse {

    private Integer id;
    private String nome;

    public static VendedorResponse of(Vendedor vendedor) {

        return VendedorResponse.builder()
                .id(vendedor.getId())
                .nome(vendedor.getNome())
                .build();
    }

    public static List<VendedorResponse> of(List<Vendedor> vendedores) {

        if(vendedores == null) {

            return null;
        }

        List<VendedorResponse> list = new ArrayList<>(vendedores.size());

        for (Vendedor vendedor : vendedores) {

            list.add(of(vendedor));
        }

        return list;
    }
}
