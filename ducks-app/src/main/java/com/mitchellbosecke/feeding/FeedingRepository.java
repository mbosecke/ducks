package com.mitchellbosecke.feeding;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FeedingRepository extends JpaRepository<Feeding, Long> {

    @Query(nativeQuery = true,
            value = "SELECT f.* " +
                    "FROM feeding f " +
                    "WHERE repeats_every_x_days IS NOT NULL " +
                    "AND extract(day from current_date - date_entered) > 0 " +
                    "AND mod(cast(extract(day from current_date - date_entered) as integer), repeats_every_x_days) = 0")
    List<Feeding> findRepeatFeedings();

}
