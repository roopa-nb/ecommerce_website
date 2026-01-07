package com.ecommerce.user.service;

import com.ecommerce.user.entity.Product;
import com.ecommerce.user.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> getAll() {
        return repo.findByTenantIdAndActiveTrue(1L);
    }

    public List<Product> getFeatured() {
        return repo.findByFeaturedTrue();
    }

    public List<Product> getByCategory(String slug) {
        return repo.findByCategory_Slug(slug);
    }

    public Product getBySlug(String slug) {
        return repo.findBySlug(slug)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }
}
