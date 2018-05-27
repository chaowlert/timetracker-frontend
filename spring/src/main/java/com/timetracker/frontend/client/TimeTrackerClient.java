package com.timetracker.frontend.client;

import com.timetracker.frontend.model.TrackingRecord;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "timetracker", url = "${timetracker.url}")
public interface TimeTrackerClient {
    @GetMapping("/records")
    List<TrackingRecord> browse(@RequestParam("email") String email, @RequestParam("offset") int offset, @RequestParam("length") int length);

    @PostMapping("/records")
    TrackingRecord add(@RequestParam("email") String email, @RequestParam("start") String start, @RequestParam("end") String end);
}
