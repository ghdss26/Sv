package com.example.vendas.sv.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class VendaRequest {

    @NotNull
    private Double valor;

    @NotNull
    private Integer vendedorId;
}
