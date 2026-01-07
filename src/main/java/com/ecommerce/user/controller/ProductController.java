package com.ecommerce.user.controller;

import com.ecommerce.user.entity.Product;
import com.ecommerce.user.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")

public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    // All products
    @GetMapping
    public List<Product> getAll() {
        return service.getAll();
    }

    // Featured products (home page)
    @GetMapping("/featured")
    public List<Product> getFeatured() {
        return service.getFeatured();
    }

    // Products by category
    @GetMapping("/category/{slug}")
    public List<Product> getByCategory(@PathVariable String slug) {
        return service.getByCategory(slug);
    }

    // Single product page
    @GetMapping("/{slug}")
    public Product getBySlug(@PathVariable String slug) {
        return service.getBySlug(slug);
    }
}
