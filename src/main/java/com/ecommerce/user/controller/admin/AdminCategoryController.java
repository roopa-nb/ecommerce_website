package com.ecommerce.user.controller.admin;

import com.ecommerce.user.entity.Category;
import com.ecommerce.user.repository.CategoryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/categories")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminCategoryController {

    private final CategoryRepository repo;

    public AdminCategoryController(CategoryRepository repo) {
        this.repo = repo;
    }

    // ✅ ADMIN → GET ALL (active + inactive)
    @GetMapping
    public List<Category> getAllAdmin() {
        return repo.findAllByOrderByDisplayOrderAsc();
    }
    @PostMapping
    public Category create(@RequestBody Category category) {

        if (category.getName() == null || category.getName().isBlank()) {
            throw new RuntimeException("Category name required");
        }

        String slug = category.getName()
                .toLowerCase()
                .trim()
                .replaceAll("[^a-z0-9]+", "-")
                .replaceAll("^-|-$", "");

        category.setSlug(slug);
        category.setTenantId(1L);

        if (category.getDisplayOrder() == null) {
            category.setDisplayOrder(0);
        }

        return repo.save(category);
    }

    @PutMapping("/{id}")
    public Category update(@PathVariable Long id, @RequestBody Category category) {

        Category existing = repo.findById(id).orElseThrow();

        existing.setName(category.getName());
        existing.setImageUrl(category.getImageUrl());
        existing.setDescription(category.getDescription());
        existing.setActive(category.getActive());
        existing.setDisplayOrder(category.getDisplayOrder());

        String slug = category.getName()
                .toLowerCase()
                .trim()
                .replaceAll("[^a-z0-9]+", "-")
                .replaceAll("^-|-$", "");

        existing.setSlug(slug);

        return repo.save(existing);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}

