package com.mitchellbosecke.feeding;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/feeding")
public class FeedingController {

    private final Logger logger = LoggerFactory.getLogger(FeedingController.class);

    private final FeedingService feedingService;

    public FeedingController(FeedingService feedingService) {
        this.feedingService = feedingService;
    }


    @PostMapping
    public void addFeeding(@Validated @RequestBody FeedingDto feedingDto){
        feedingService.add(feedingDto);
    }

}
