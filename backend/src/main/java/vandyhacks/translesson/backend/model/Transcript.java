package vandyhacks.translesson.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.LocalDate;

@Document(collection = "transcripts")
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Transcript {
    @MongoId(FieldType.OBJECT_ID)
    private String _id;

    private String name;
    private LocalDate date;
    private String text;
}
