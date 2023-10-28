package vandyhacks.translesson.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import vandyhacks.translesson.backend.model.Transcript;
import vandyhacks.translesson.backend.service.TranscriptService;

import java.time.LocalDate;
import java.util.List;

@Controller
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
        return service.addTranscript(t);
    }
}
