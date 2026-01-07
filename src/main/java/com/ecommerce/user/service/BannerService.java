package com.ecommerce.user.service;

import com.ecommerce.user.entity.Banner;
import com.ecommerce.user.repository.BannerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BannerService {

    private final BannerRepository repo;

    public BannerService(BannerRepository repo) {
        this.repo = repo;
    }

    public List<Banner> getAllActive() {
        return repo.findByTenantIdAndActiveTrueOrderByPositionAsc(1L);
    }
}
