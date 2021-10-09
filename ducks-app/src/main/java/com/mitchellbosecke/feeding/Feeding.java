package com.mitchellbosecke.feeding;

import javax.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "feeding", schema = "ducks")
public class Feeding {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String userId;

    @Column
    private OffsetDateTime dateEntered;

    @Column
    private OffsetDateTime feedingTime;

    @Column
    private String food;

    @Column
    private String location;

    @Column
    private Integer numberOfDucks;

    @Column
    private Integer quantityCups;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public OffsetDateTime getDateEntered() {
        return dateEntered;
    }

    public void setDateEntered(OffsetDateTime dateEntered) {
        this.dateEntered = dateEntered;
    }


    public OffsetDateTime getFeedingTime() {
        return feedingTime;
    }

    public void setFeedingTime(OffsetDateTime feedingTime) {
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
