package com.ecommerce.user.repository;

import com.ecommerce.user.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByTenantIdAndActiveTrue(Long tenantId);

    List<Product> findByFeaturedTrue();

    List<Product> findByCategory_Slug(String slug);

    Optional<Product> findBySlug(String slug);
}
