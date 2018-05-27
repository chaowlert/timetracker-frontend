package com.timetracker.frontend.controller;

import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

import com.timetracker.frontend.client.TimeTrackerClient;
import com.timetracker.frontend.model.TrackingRecord;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.ui.ExtendedModelMap;
import org.springframework.ui.Model;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RunWith(MockitoJUnitRunner.class)
public class AppControllerTest {
    @Mock
    private TimeTrackerClient client;

    @InjectMocks
    private AppController controller;

    private void assertModel(List<TrackingRecord> records, int page, boolean canBack, boolean canNext, int size) {
        ReflectionTestUtils.setField(controller, "pageSize", 2);
        when(client.browse(anyString(), anyInt(), anyInt())).thenReturn(records);

        Model model = new ExtendedModelMap();
        controller.search("chaowlert@gmail.com", page, model);

        Map<String, Object> map = model.asMap();
        assertEquals(canBack, map.get("canBack"));
        assertEquals(canNext, map.get("canNext"));
        assertEquals(size, ((List)map.get("records")).size());
    }

    @Test
    public void testSearchNoResult() {
        assertModel(new ArrayList<TrackingRecord>() {{
            add(null);
            add(null);
            add(null);
        }}, 1, false, false, 0);
    }

    @Test
    public void testSearch2ndPage() {
        assertModel(new ArrayList<TrackingRecord>() {{
            add(TrackingRecord.builder().build());
            add(null);
            add(null);
        }}, 2, true, false, 1);
    }

    @Test
    public void testSearch2Results() {
        assertModel(new ArrayList<TrackingRecord>() {{
            add(TrackingRecord.builder().build());
            add(TrackingRecord.builder().build());
            add(null);
        }}, 1, false, false, 2);
    }

    @Test
    public void testSearch3Results() {
        assertModel(new ArrayList<TrackingRecord>() {{
            add(TrackingRecord.builder().build());
            add(TrackingRecord.builder().build());
            add(TrackingRecord.builder().build());
        }}, 1, false, true, 2);
    }

    @Test
    public void testAdd() {
        String email = "chaowlert@gmail.com";
        String start = "02.02.2018 03:04";
        String end = "31.12.2018 23:59";
        TrackingRecord expected = TrackingRecord.builder().build();
        when(client.add(anyString(), anyString(), anyString())).thenReturn(expected);

        Model model = new ExtendedModelMap();
        controller.add(email, start, end, model);

        Map map = model.asMap();
        verify(client).add(eq(email), eq(start), eq(end));
        assertEquals(expected, map.get("added"));
    }
}
