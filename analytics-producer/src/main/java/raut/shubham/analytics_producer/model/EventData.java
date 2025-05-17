package raut.shubham.analytics_producer.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EventData {
    private String courseId;
    private String eventType;
}
