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

import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class ApiControllerTest {
    @Mock
    private TimeTrackerClient client;

    @InjectMocks
    private ApiController controller;

    @Test
    public void testBrowse() {
        String email = "chaowlert@gmail.com";
        int offset = 1;
        int limit = 2;
        List<TrackingRecord> expected = new ArrayList<TrackingRecord>() {{
            add(TrackingRecord.builder().build());
            add(TrackingRecord.builder().build());
            add(null);
            add(null);
        }};
        when(client.browse(anyString(), anyInt(), anyInt())).thenReturn(expected);

        List<TrackingRecord> actual = controller.browse(email, offset, limit);

        verify(client).browse(eq(email), eq(offset), eq(limit));
        assertEquals(2, actual.size());
    }

    @Test
    public void testAdd() {
        String email = "chaowlert@gmail.com";
        TrackingRecordData record = TrackingRecordData.builder()
                .email(email)
                .start("02.02.2018 03:04")
                .end("31.12.2018 23:59")
                .build();
        TrackingRecord expected = TrackingRecord.builder().build();
        when(client.add(anyString(), anyString(), anyString())).thenReturn(expected);

        TrackingRecord actual = controller.add(record);

        verify(client).add(eq(email), eq(record.getStart()), eq(record.getEnd()));
        assertEquals(expected, actual);
    }
}
