package raut.shubham.analytics_consumer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import raut.shubham.analytics_consumer.model.EventData;
import raut.shubham.analytics_consumer.repository.AnalyticsRepository;

import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

@RestController
@RequestMapping("/analytics")
public class SavedDataController {
    @Autowired
    private AnalyticsRepository repository;
    @GetMapping("/data")
    private ResponseEntity<List<EventData>> getData(){
        List<EventData> data = repository.findAll();
        return new ResponseEntity(data, HttpStatus.OK);
    }
}
