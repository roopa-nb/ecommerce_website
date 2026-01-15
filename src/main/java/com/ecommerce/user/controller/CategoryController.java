package com.ecommerce.user.controller;

import com.ecommerce.user.entity.Category;
import com.ecommerce.user.service.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:5173")
public class CategoryController {

    private final CategoryService service;

    public CategoryController(CategoryService service) {
        this.service = service;
    }

    // ✅ USER → only ACTIVE
    @GetMapping
    public List<Category> getAll() {
        return service.getAllActive();
    }

    @GetMapping("/{slug}")
    public Category getBySlug(@PathVariable String slug) {
        return service.getBySlug(slug);
    }
}

