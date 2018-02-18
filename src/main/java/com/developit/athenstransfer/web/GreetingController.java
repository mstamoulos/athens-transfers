package com.developit.athenstransfer.web;


import java.util.concurrent.atomic.AtomicLong;

import com.developit.athenstransfer.model.EmailRequest;
import com.developit.athenstransfer.model.Greeting;
import com.developit.athenstransfer.services.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class GreetingController {
	@Autowired
	EmailService emailService;

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping(value="/greeting",method=RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE )
    public Greeting greeting(@RequestBody EmailRequest emailRequest) {
    	emailService.sendEmail(emailRequest);
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, "aaa"));
    }
}