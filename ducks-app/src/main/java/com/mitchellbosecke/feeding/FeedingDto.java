package com.mitchellbosecke.feeding;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class FeedingDto {

    @NotNull
    private LocalDateTime feedingTime;

    @NotBlank
    private String timezone;

    @NotBlank
    private String food;

    @NotBlank
    private String location;

    @NotNull
    private Integer numberOfDucks;

    @NotNull
    private Integer quantityCups;

    public FeedingDto() {
    }

    public FeedingDto(LocalDateTime feedingTime, String timezone, String food, String location, int numberOfDucks, int quantityCups) {
        this.feedingTime = feedingTime;
        this.timezone = timezone;
        this.food = food;
        this.location = location;
        this.numberOfDucks = numberOfDucks;
        this.quantityCups = quantityCups;
    }

    public LocalDateTime getFeedingTime() {
        return feedingTime;
    }

    public void setFeedingTime(LocalDateTime feedingTime) {
        this.feedingTime = feedingTime;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }

    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getNumberOfDucks() {
        return numberOfDucks;
    }

    public void setNumberOfDucks(Integer numberOfDucks) {
        this.numberOfDucks = numberOfDucks;
    }

    public Integer getQuantityCups() {
        return quantityCups;
    }

    public void setQuantityCups(Integer quantityCups) {
        this.quantityCups = quantityCups;
    }
}
