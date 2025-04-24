package raut.shubham.analytics_consumer.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Counter;
import jakarta.annotation.PostConstruct;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import raut.shubham.analytics_consumer.model.EventData;

@Service
@EnableKafka

public class KafkaEventConsumer {

    private final MeterRegistry meterRegistry;
    private Counter enrollCounter;
    private Counter purchaseCounter;

    public KafkaEventConsumer(MeterRegistry meterRegistry) {
        this.meterRegistry = meterRegistry;
    }

    @PostConstruct
    public void initCounters() {
        enrollCounter = meterRegistry.counter("events.enroll.count");
        purchaseCounter = meterRegistry.counter("events.purchase.count");
    }

    @KafkaListener(topics = "course-events", groupId = "course-events-group")
    public void consume(String eventMessage) {
        System.out.println("Consumed: " + eventMessage);

        try {
            ObjectMapper mapper = new ObjectMapper();
            EventData event = mapper.readValue(eventMessage, EventData.class);

            switch (event.getEventType()) {
                case "enroll" -> enrollCounter.increment();
                case "purchase" -> purchaseCounter.increment();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
