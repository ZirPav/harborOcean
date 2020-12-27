package com.example.demo.controller.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FirstRestController {

    @GetMapping("/first")
    public String getName(@RequestParam String name) {
        return name;
    }

    @GetMapping("/ocean")
    public String oc() {
        return "PavelOcean";
    }
}
