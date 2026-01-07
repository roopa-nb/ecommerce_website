package com.ecommerce.user.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "banners")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class Banner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long tenantId = 1L;

    private String title;

    private String imageUrl;

    private String link;   // where to go when clicked

    private Boolean active = true;

    private Integer position; // for order (1,2,3...)
}
