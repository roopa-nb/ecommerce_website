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

    public List<Category> getAll() {
        return repo.findByTenantIdAndActiveTrue(1L);
    }

    public Category getBySlug(String slug) {
        return repo.findBySlug(slug)
                .orElseThrow(() -> new RuntimeException("Category not found"));
    }
}
