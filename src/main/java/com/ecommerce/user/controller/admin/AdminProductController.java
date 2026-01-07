package com.ecommerce.user.controller.admin;

import com.ecommerce.user.entity.Category;
import com.ecommerce.user.entity.Product;
import com.ecommerce.user.repository.CategoryRepository;
import com.ecommerce.user.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/products")
@CrossOrigin(origins = "http://localhost:5173")

public class AdminProductController {

    private final ProductRepository productRepo;
    private final CategoryRepository categoryRepo;

    public AdminProductController(ProductRepository productRepo, CategoryRepository categoryRepo) {
        this.productRepo = productRepo;
        this.categoryRepo = categoryRepo;
    }

    @PostMapping
    public Product create(@RequestBody Product product) {
        Category category = categoryRepo.findById(product.getCategory().getId()).orElseThrow();
        product.setCategory(category);
        product.setTenantId(1L);
        return productRepo.save(product);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productRepo.deleteById(id);
    }
}
