package com.escola.almoxarifado.item;

import com.escola.almoxarifado.categoria.Categoria;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; 

@Entity
@Table(name = "itens")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome do item é obrigatório")
    @Column(nullable = false)
    private String nome;

    // Relacionamento ManyToOne com Categoria
    @NotNull(message = "A categoria é obrigatória")
    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;

    @NotBlank(message = "A unidade de medida é obrigatória")
    @Column(name = "unidade_medida", nullable = false)
    private String unidadeMedida;

    @NotNull(message = "O estoque atual é obrigatório")
    @Positive(message = "O estoque atual deve ser um número positivo")
    @Column(name = "estoque_atual", nullable = false)
    private Integer estoqueAtual;

    @NotNull(message = "O estoque mínimo é obrigatório")
    @Positive(message = "O estoque mínimo deve ser um número positivo")
    @Column(name = "estoque_minimo", nullable = false)
    private Integer estoqueMinimo;

    @NotNull(message = "O status ativo é obrigatório")
    @Column(nullable = false)
    private Boolean ativo;
}