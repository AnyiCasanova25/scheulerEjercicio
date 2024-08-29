package com.sena.scheuler;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class ScheulerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScheulerApplication.class, args);
	}

}
