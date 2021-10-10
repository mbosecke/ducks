package com.mitchellbosecke.feeding;

public interface FeedingService {

    Feeding add(FeedingDto feedingDto);

    void addRepeatFeedings();

}
