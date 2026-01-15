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

    // USER
    public List<Product> getAllActive() {
        return repo.findByActiveTrue();
    }

    public List<Product> search(String q) {
        return repo.findByNameContainingIgnoreCaseAndActiveTrue(q);
    }


    public List<Product> getFeatured() {
        return repo.findByFeaturedTrueAndActiveTrue();
    }

    public List<Product> getByCategory(String slug) {
        return repo.findByCategory_SlugAndActiveTrue(slug);
    }

    // ADMIN
    public List<Product> getAllAdmin() {
        return repo.findAll();
    }
}
