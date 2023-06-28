package com.example.vendas.sv.models;

import com.example.vendas.sv.dto.request.VendedorRequest;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.beans.BeanUtils;

import java.util.List;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "vendedor")
public class Vendedor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "nome", length = 45, nullable = false)
    private String nome;

    @OneToMany(mappedBy = "vendedor")
    private List<Venda> vendas;

    public Vendedor (Integer id) {

        this.id = id;
    }

    public static Vendedor of(VendedorRequest request) {

        var vendedor = new Vendedor();

        BeanUtils.copyProperties(request, vendedor);

        return vendedor;
    }

}
