package com.timetracker.frontend.controller;

import com.timetracker.frontend.client.TimeTrackerClient;
import com.timetracker.frontend.model.TrackingRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.stream.Collectors;

@Controller
public class AppController {

    @Value("${timetracker.pageSize:10}")
    private int pageSize;

    @Autowired
    private TimeTrackerClient client;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/spa")
    public String spa() {
        return "spa";
    }

    @PostMapping("/search")
    public String search(@RequestParam String email, @RequestParam(required = false, defaultValue = "1") int page, Model model) {
        fetchToModel(email, page, model);
        return "index";
    }

    @PostMapping("/add")
    public String add(@RequestParam String email, @RequestParam String start, @RequestParam String end, Model model) {
        TrackingRecord result = client.add(email, start, end);
        model.addAttribute("added", result);
        return "index";
    }

    private void fetchToModel(String email, int page, Model model) {
        int offset = (page - 1) * pageSize;
        List<TrackingRecord> results = client.browse(email, offset, pageSize + 1);
        List<TrackingRecord> records = results.stream()
                .filter(it -> it != null)
                .limit(pageSize)
                .collect(Collectors.toList());
        model.addAttribute("canBack", offset > 0);
        model.addAttribute("canNext", results.size() == pageSize + 1 && results.get(pageSize) != null);
        model.addAttribute("page", page);
        model.addAttribute("records", records);
    }
}
