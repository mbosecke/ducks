package com.mitchellbosecke.feeding;

import javax.persistence.*;

@Entity
@Table(name = "feeding", schema = "ducks")
public class Feeding {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;





}
