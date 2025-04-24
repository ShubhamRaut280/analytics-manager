package raut.shubham.analytics_consumer.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class EventData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    private String courseId;
    private String eventType;

}
