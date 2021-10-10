package com.mitchellbosecke;

import com.mitchellbosecke.feeding.FeedingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class Scheduler {

    private final Logger logger = LoggerFactory.getLogger(Scheduler.class);

    private final FeedingService feedingService;

    public Scheduler(FeedingService feedingService) {
        this.feedingService = feedingService;
    }


    /**
     * Process repeat feedings at 4:00am every day.
     */
    @Scheduled(cron = "0 0 4 * * *")
    public void processRepeatFeedings(){

        logger.debug("Processing repeat feedings");
        feedingService.addRepeatFeedings();
    }
}
