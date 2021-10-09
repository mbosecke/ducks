package com.mitchellbosecke.users;

import javax.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "Users", schema = "ducks")
public class User {

    @Id
    private String username;

    @Column
    private boolean enabled;

    public User(){

    }

    public User(String username){
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}
