package com.escola.almoxarifado.fornecedor;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "fornecedores")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Fornecedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome do fornecedor é obrigatório")
    @Column(nullable = false)
    private String nome;

    @NotBlank(message = "O CNPJ é obrigatório")
    @Column(nullable = false, unique = true)
    private String cnpj;

    @NotBlank(message = "O contato é obrigatório")
    @Column(nullable = false)
    private String contato;
}