package com.ecommerce.user.service;

import com.ecommerce.user.entity.Category;
import com.ecommerce.user.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository repo;

    public CategoryService(CategoryRepository repo) {
        this.repo = repo;
    }

    // USER
    public List<Category> getAllActive() {
        return repo.findByActiveTrueOrderByDisplayOrderAsc();
    }

    public Category getBySlug(String slug) {
        return repo.findBySlugAndActiveTrue(slug);
    }

    // ADMIN
    public List<Category> getAllAdmin() {
        return repo.findAllByOrderByDisplayOrderAsc();
    }
}



