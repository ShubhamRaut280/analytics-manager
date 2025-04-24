package raut.shubham.analytics_consumer.services;

import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@EnableKafka
public class KafkaEventConsumer {

    @KafkaListener(topics = "course-events", groupId = "course-events-group")
    public void consume(String eventMessage) {
        System.out.println("Consumed event: " + eventMessage);

    }
}
