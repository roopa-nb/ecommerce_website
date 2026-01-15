package com.ecommerce.user.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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

    @Column(nullable = false)
    private String name;

    @Column(length = 1000)
    private String description;

    @Column(columnDefinition = "TEXT")
    private String imageUrl;
    @Column(unique = true, nullable = false)
    private String slug;




    private Boolean active = true;
    private Boolean featured = false;
    private Integer displayOrder = 0;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;
}
