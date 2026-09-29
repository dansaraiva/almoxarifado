package com.escola.almoxarifado.categoria;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class CategoriaService {

    private final CategoriaRepository repository;

    public CategoriaService(CategoriaRepository repository) {
        this.repository = repository;
    }

    public List<Categoria> listarTodas() {
        return repository.findAll();
    }

    public Categoria salvar(Categoria categoria) {
        return repository.save(Objects.requireNonNull(categoria));
    }
}