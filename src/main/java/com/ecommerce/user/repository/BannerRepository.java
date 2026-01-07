package com.ecommerce.user.repository;

import com.ecommerce.user.entity.Banner;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BannerRepository extends JpaRepository<Banner, Long> {

    List<Banner> findByTenantIdAndActiveTrueOrderByPositionAsc(Long tenantId);
}
