package com.mitchellbosecke.feeding;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;

public class FeedingDto {

    @NotNull
    private LocalDateTime feedingTime;

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

    public FeedingDto(Feeding feeding) {

    }

    public LocalDateTime getFeedingTime() {
        return feedingTime;
    }

    public void setFeedingTime(LocalDateTime feedingTime) {
        this.feedingTime = feedingTime;
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
