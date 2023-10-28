package vandyhacks.translesson.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import vandyhacks.translesson.backend.model.Transcript;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TranscriptRepository extends MongoRepository<Transcript, String> {
    List<Transcript> findByName(String name);
    List<Transcript> findByDate(LocalDate date);
}
