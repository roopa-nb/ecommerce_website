package com.ecommerce.user.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "products")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long tenantId = 1L;   // for future SaaS

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String slug;

    private String imageUrl;

    private Double price;

    @Column(length = 2000)
    private String description;

    private Boolean featured = false;

    private Boolean active = true;

    // Many products → One category
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
}
