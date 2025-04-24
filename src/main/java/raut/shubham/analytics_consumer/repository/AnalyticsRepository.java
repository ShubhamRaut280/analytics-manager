package raut.shubham.analytics_consumer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import raut.shubham.analytics_consumer.model.EventData;

@Repository
public interface AnalyticsRepository extends JpaRepository<EventData, Long> {
}
