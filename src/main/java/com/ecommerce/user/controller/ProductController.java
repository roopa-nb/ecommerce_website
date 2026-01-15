package com.ecommerce.user.controller;

import com.ecommerce.user.entity.Product;
import com.ecommerce.user.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("http://localhost:5173")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product> allActive() {
        return service.getAllActive();
    }

    @GetMapping("/featured")
    public List<Product> featured() {
        return service.getFeatured();
    }

    @GetMapping("/category/{slug}")
    public List<Product> byCategory(@PathVariable String slug) {
        return service.getByCategory(slug);
    }

    @GetMapping("/search")
    public List<Product> search(@RequestParam String q) {
        return service.search(q);
    }

}
