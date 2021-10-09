package com.mitchellbosecke.feeding;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.TimeZone;

@Service
@Transactional
public class FeedingServiceImpl implements FeedingService {

    private final Logger logger = LoggerFactory.getLogger(FeedingServiceImpl.class);

    private final FeedingRepository feedingRepository;

    @Autowired
    public FeedingServiceImpl(FeedingRepository feedingRepository) {
        this.feedingRepository = feedingRepository;
    }

    @Override
    public Feeding add(FeedingDto feedingDto) {

        if (feedingDto.getTimezone() == null) {
            throw new RuntimeException("Timezone must be provided");
        }
        ZoneId timezone = ZoneId.of(feedingDto.getTimezone());

        Feeding feeding = new Feeding();
        feeding.setUserId("??");
        feeding.setDateEntered(OffsetDateTime.now());
        feeding.setFeedingTime(feedingDto.getFeedingTime().atZone(timezone).toOffsetDateTime());
        feeding.setFood(feedingDto.getFood());
        feeding.setLocation(feedingDto.getLocation());
        feeding.setNumberOfDucks(feedingDto.getNumberOfDucks());
        feeding.setQuantityCups(feedingDto.getQuantityCups());

        feedingRepository.save(feeding);
        return feeding;
    }
}
