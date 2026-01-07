package com.ecommerce.user.controller;

import com.ecommerce.user.entity.Banner;
import com.ecommerce.user.service.BannerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/banners")
@CrossOrigin(origins = "http://localhost:5173")

public class BannerController {

    private final BannerService service;

    public BannerController(BannerService service) {
        this.service = service;
    }

    @GetMapping
    public List<Banner> getBanners() {
        return service.getAllActive();
    }
}
