package com.ecommerce.user.controller.admin;

import com.ecommerce.user.entity.Product;
import com.ecommerce.user.entity.Category;
import com.ecommerce.user.repository.ProductRepository;
import com.ecommerce.user.repository.CategoryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/products")
@CrossOrigin("http://localhost:5173")
public class AdminProductController {

    private final ProductRepository repo;
    private final CategoryRepository categoryRepo;

    public AdminProductController(ProductRepository repo, CategoryRepository categoryRepo) {
        this.repo = repo;
        this.categoryRepo = categoryRepo;
    }

    @GetMapping
    public List<Product> all() {
        return repo.findAll();
    }

    @PostMapping
    public Product create(@RequestBody Product product) {

        if (product.getName() == null || product.getCategory() == null) {
            throw new RuntimeException("Product name and category required");
        }

        // ✅ generate slug
        String slug = product.getName()
                .toLowerCase()
                .replaceAll("[^a-z0-9]+", "-")
                .replaceAll("(^-|-$)", "");

        product.setSlug(slug);

        // ✅ fetch real category
        Long catId = product.getCategory().getId();
        Category category = categoryRepo.findById(catId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        product.setCategory(category);

        return repo.save(product);
    }


    @PutMapping("/{id}")
    public Product update(@PathVariable Long id, @RequestBody Product p) {

        Product existing = repo.findById(id).orElseThrow();

        existing.setName(p.getName());

        String slug = p.getName()
                .toLowerCase()
                .replaceAll("[^a-z0-9]+", "-")
                .replaceAll("(^-|-$)", "");

        existing.setSlug(slug);
        existing.setDescription(p.getDescription());
        existing.setImageUrl(p.getImageUrl());
        existing.setActive(p.getActive());
        existing.setFeatured(p.getFeatured());
        existing.setDisplayOrder(p.getDisplayOrder());

        Category category = categoryRepo.findById(p.getCategory().getId())
                .orElseThrow(() -> new RuntimeException("Category not found"));

        existing.setCategory(category);

        return repo.save(existing);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
