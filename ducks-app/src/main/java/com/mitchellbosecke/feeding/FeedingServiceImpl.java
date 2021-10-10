package com.mitchellbosecke.feeding;

import com.mitchellbosecke.users.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalUnit;
import java.util.List;

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
        feeding.setRepeatsEveryXDays(feedingDto.getRepeatsEveryXDays());

        feedingRepository.save(feeding);
        return feeding;
    }

    @Override
    public void addRepeatFeedings() {

        OffsetDateTime now = OffsetDateTime.now();
        List<Feeding> repeatFeedings = feedingRepository.findRepeatFeedings();

        for(Feeding original : repeatFeedings){
            logger.debug("Cloning original feeding with ID [" + original.getId() + "]");

            OffsetDateTime newFeedingTime = getNewFeedingTimeForRepeatFeeding(original.getFeedingTime());
            Feeding clone = new Feeding();
            clone.setUser(original.getUser());
            clone.setDateEntered(now);
            clone.setFeedingTime(newFeedingTime);
            clone.setFood(original.getFood());
            clone.setLocation(original.getLocation());
            clone.setNumberOfDucks(original.getNumberOfDucks());
            clone.setQuantityCups(original.getQuantityCups());
            clone.setRepeatsEveryXDays(null);
            clone.setClonedFromFeeding(original);
            feedingRepository.save(clone);
        }
    }

    private OffsetDateTime getNewFeedingTimeForRepeatFeeding(OffsetDateTime original){
        int hour = original.getHour();
        int minute = original.getMinute();
        int second = original.getSecond();
        OffsetDateTime newFeedingTime = OffsetDateTime.now();
        newFeedingTime = newFeedingTime.withHour(hour);
        newFeedingTime = newFeedingTime.withMinute(minute);
        newFeedingTime = newFeedingTime.withSecond(second);
        return newFeedingTime;
    }


}
