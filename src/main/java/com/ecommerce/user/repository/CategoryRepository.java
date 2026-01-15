package com.ecommerce.user.repository;

import com.ecommerce.user.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    // User panel
    List<Category> findByActiveTrueOrderByDisplayOrderAsc();

    // Admin panel
    List<Category> findAllByOrderByDisplayOrderAsc();

    boolean existsBySlug(String slug);

    Category findBySlugAndActiveTrue(String slug);
}
