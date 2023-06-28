package com.example.vendas.sv.dto.response;

import com.example.vendas.sv.models.Venda;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
public class VendaResponse {

    private Integer id;
    private LocalDate data_venda;
    private Double valor;
    private String vendedor;

    public static VendaResponse of(Venda venda) {

        return VendaResponse.builder()
                .id(venda.getId())
                .data_venda(venda.getData_venda())
                .valor(venda.getValor())
                .vendedor(venda.getVendedor().getNome())
                .build();
    }

    public static List<VendaResponse> of(List<Venda> vendas) {

        if (vendas == null) {

            return null;
        }

        List<VendaResponse> list = new ArrayList<>(vendas.size());

        for (Venda venda : vendas) {

            list.add(of (venda)) ;
        }

        return list;
    }

}
