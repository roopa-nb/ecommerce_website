package com.ecommerce.user.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "categories")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long tenantId = 1L; // temporary (for future SaaS)

    @Column(nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String slug;

    private String imageUrl;

    @Column(nullable = false)
    private Boolean active = true;
}
