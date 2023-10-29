package vandyhacks.translesson.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vandyhacks.translesson.backend.model.Transcript;
import vandyhacks.translesson.backend.service.TranscriptService;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
public class TranscriptController {
    private final TranscriptService service;

    @Autowired
    public TranscriptController(TranscriptService service) {
        this.service = service;
    }

    @GetMapping(value = "/transcripts", params = {"name", "language"})
    public List<String> getByNameAndLanguage(@RequestParam String name, @RequestParam String language) {
        return service.getTextsByNameAndLanguage(name, language);
    }

    @GetMapping(value = "/transcripts", params = {"date", "language"})
    public List<String> getByDateAndLanguage(@RequestParam LocalDate date, @RequestParam String language) {
        return service.getTextsByDateAndLanguage(date, language);
    }

    @PostMapping("/transcripts")
    public String addTranscript(@RequestBody Transcript t) {
        System.out.println(t.getText());
        return service.addTranscript(t);
    }

    private <T> ResponseEntity<T> getCorsResponse(T t) {
        HttpHeaders headers = new HttpHeaders();

        // Add CORS headers
        headers.add("Access-Control-Allow-Origin", "*");
        headers.add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        headers.add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        headers.add("Access-Control-Allow-Credentials", "true");

        return new ResponseEntity<>(t, headers, HttpStatus.OK);
    }
}
