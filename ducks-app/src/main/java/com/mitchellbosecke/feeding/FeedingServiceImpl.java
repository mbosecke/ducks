package com.mitchellbosecke.feeding;

import com.mitchellbosecke.users.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.OffsetDateTime;
import java.time.ZoneId;

@Service
@Transactional
public class FeedingServiceImpl implements FeedingService {

    private final Logger logger = LoggerFactory.getLogger(FeedingServiceImpl.class);

    private final FeedingRepository feedingRepository;

    private final UserService userService;

    @Autowired
    public FeedingServiceImpl(FeedingRepository feedingRepository, UserService userService) {
        this.feedingRepository = feedingRepository;
        this.userService = userService;
    }

    @Override
    public Feeding add(FeedingDto feedingDto) {

        if (feedingDto.getTimezone() == null) {
            throw new RuntimeException("Timezone must be provided");
        }
        ZoneId timezone = ZoneId.of(feedingDto.getTimezone());

        Feeding feeding = new Feeding();
        feeding.setUser(userService.getLoggedInUser());
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
