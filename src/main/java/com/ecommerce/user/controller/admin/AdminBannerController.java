package com.ecommerce.user.controller.admin;

import com.ecommerce.user.entity.Banner;
import com.ecommerce.user.repository.BannerRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/banners")
@CrossOrigin(origins = "http://localhost:5173")

public class AdminBannerController {

    private final BannerRepository repo;

    public AdminBannerController(BannerRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Banner create(@RequestBody Banner banner) {
        banner.setTenantId(1L);
        return repo.save(banner);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
