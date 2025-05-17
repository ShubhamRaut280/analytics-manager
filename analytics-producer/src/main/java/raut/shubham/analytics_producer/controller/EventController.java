package raut.shubham.analytics_producer.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import raut.shubham.analytics_producer.model.EventData;
import raut.shubham.analytics_producer.service.KafkaEventProducer;

@RestController
@RequestMapping("/api")
public class EventController {

    @Autowired
    private KafkaEventProducer producer;

    @PostMapping("/event")
    public ResponseEntity<String> sendEvent(@RequestBody EventData data) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(data);
        producer.sendMessage(json);
        return new ResponseEntity<>("Event sent to Kafka!", HttpStatus.OK);
    }
}
