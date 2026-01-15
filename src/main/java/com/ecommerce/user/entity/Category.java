package com.ecommerce.user.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@Entity
@Table(name = "categories")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class Category {

//    @OneToMany(mappedBy = "category")
//    @JsonManagedReference
//    private List<Product> products;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long tenantId = 1L;
    private String name;
    private String slug;
    private String description;
    private Integer displayOrder = 0;
    private Boolean active = true;
    @Column(columnDefinition = "TEXT")
    private String imageUrl;

}
