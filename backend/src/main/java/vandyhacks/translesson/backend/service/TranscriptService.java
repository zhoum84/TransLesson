package vandyhacks.translesson.backend.service;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.translate.Translate;
import com.google.api.services.translate.model.TranslationsResource;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vandyhacks.translesson.backend.model.Transcript;
import vandyhacks.translesson.backend.repository.TranscriptRepository;

import java.time.LocalDate;
import java.util.List;

@Service
public class TranscriptService {
    private final TranscriptRepository repository;

    @Autowired
    public TranscriptService(TranscriptRepository repository) {
        this.repository = repository;
    }

    public List<String> getTextsByNameAndLanguage(String name, String language) {
        return translate(getTextsByName(name), language);
    }

    public List<String> getTextsByName(String name) {
        return repository.findByName(name).stream().map(Transcript::getText).toList();
    }

    public List<String> getTextsByDateAndLanguage(LocalDate date, String language) {
        return translate(getTextsByDate(date), language);
    }

    public List<String> getTextsByDate(LocalDate date) {
        return repository.findByDate(date).stream().map(Transcript::getText).toList();
    }

    public List<String> getAll() {
        return repository.findAll().stream().map(Transcript::getText).toList();
    }

    @SneakyThrows
    public List<String> translate(List<String> texts, String language) {
        Translate t = new Translate.Builder(GoogleNetHttpTransport.newTrustedTransport(),
                GsonFactory.getDefaultInstance(), null)
                .setApplicationName("TransLesson")
                .build();
        Translate.Translations.List list = t.new Translations().list(texts, language);
        list.setKey("AIzaSyBSY85cWOiIhVSwEZ13oLoo2k1tB24wBw4");
        return list
                .execute()
                .getTranslations()
                .stream()
                .map(TranslationsResource::getTranslatedText)
                .toList();
    }

    public String addTranscript(Transcript t) {
        return repository.save(t).get_id();
    }
}
