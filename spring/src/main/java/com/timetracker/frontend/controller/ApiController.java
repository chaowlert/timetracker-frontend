package com.timetracker.frontend.controller;

import com.timetracker.frontend.client.TimeTrackerClient;
import com.timetracker.frontend.model.TrackingRecord;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ApiController {

    @Autowired
    private TimeTrackerClient client;

    @GetMapping("/api/records")
    public List<TrackingRecord> browse(
            @RequestParam String email,
            @RequestParam(required = false, defaultValue = "0") int offset,
            @RequestParam(required = false, defaultValue = "10") int limit) {

        return client.browse(email, offset, limit)
                .stream()
                .filter(item -> item != null)
                .collect(Collectors.toList());
    }

    @PostMapping("/api/records")
    public TrackingRecord add(@RequestBody TrackingRecordData data) {
        return client.add(data.getEmail(), data.getStart(), data.getEnd());
    }
}

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
class TrackingRecordData {
    @NotNull
    private String email;

    @NotNull
    private String start;

    @NotNull
    private String end;
}
