package com.example.vendas.sv.models;

import com.example.vendas.sv.dto.request.VendaRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "venda")
public class Venda {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "data_venda", nullable = false)
    private LocalDate data_venda;

    @Column(name = "valor", nullable = false)
    private Double valor;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "vendedor", nullable = false)
    private Vendedor vendedor;

    public Venda (Integer id) {

        this.id = id;
    }

    public static Venda of(VendaRequest request) {

        return Venda.builder()
                .data_venda(LocalDate.now())
                .valor(request.getValor())
                .vendedor(new Vendedor(request.getVendedorId()))
                .build();
    }


}
