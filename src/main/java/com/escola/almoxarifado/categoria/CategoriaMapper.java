package com.escola.almoxarifado.categoria;

public class CategoriaMapper {

    private CategoriaMapper() {
        // Utility class
    }

    public static CategoriaDTO toDto(Categoria categoria) {
        if (categoria == null) {
            return null;
        }
        return new CategoriaDTO(categoria.getId(), categoria.getNome());
    }

    public static Categoria toEntity(CategoriaDTO dto) {
        if (dto == null) {
            return null;
        }

        Categoria categoria = new Categoria();
        categoria.setId(dto.getId());
        categoria.setNome(dto.getNome());
        return categoria;
    }
}