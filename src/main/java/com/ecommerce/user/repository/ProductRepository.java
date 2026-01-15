package com.ecommerce.user.repository;

import com.ecommerce.user.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByActiveTrue();

    List<Product> findByFeaturedTrueAndActiveTrue();

    List<Product> findByCategory_SlugAndActiveTrue(String slug);
    List<Product> findByNameContainingIgnoreCaseAndActiveTrue(String q);


}
