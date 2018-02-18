
package com.developit.athenstransfer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

//@SpringBootApplication
@Configuration
@EnableAutoConfiguration
@ComponentScan({"com.developit.athenstransfer"})
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}