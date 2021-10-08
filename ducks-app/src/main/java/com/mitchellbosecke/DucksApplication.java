package com.mitchellbosecke;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class DucksApplication {

	public static void main(String[] args) {
		SpringApplication.run(DucksApplication.class, args);
	}

}
