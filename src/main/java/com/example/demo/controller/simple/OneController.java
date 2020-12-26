package com.example.demo.controller.simple;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OneController {

    @GetMapping("/")
    public String getOcean() {
        return "ocean.html";
    }
}
