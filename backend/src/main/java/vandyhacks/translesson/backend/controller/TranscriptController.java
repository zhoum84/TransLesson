package vandyhacks.translesson.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vandyhacks.translesson.backend.model.Transcript;
import vandyhacks.translesson.backend.service.TranscriptService;

import javax.servlet.http.HttpServletResponse;
import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class TranscriptController {
    private final TranscriptService service;

    @Autowired
    public TranscriptController(TranscriptService service) {
        this.service = service;
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/transcripts", params = {"name", "language"})
    public List<String> getByNameAndLanguage(@RequestParam String name, @RequestParam String language) {
        System.out.println("Get 1" + name + " " + language);
        return service.getTextsByNameAndLanguage(name, language);
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/transcripts", params = {"date", "language"})
    public List<String> getByDateAndLanguage(@RequestParam LocalDate date, @RequestParam String language) {
        System.out.println("Get 2" + date + " " + language);
        return service.getTextsByDateAndLanguage(date, language);
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/transcripts/all")
    public List<String> getAll() {
        System.out.println("Get 3");
        return service.getAll();
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/transcripts")
    public ResponseEntity<String> addTranscript(@RequestBody Transcript t) {
        System.out.println(t.getText());
        return getCorsResponse(service.addTranscript(t));
    }

    private <T> ResponseEntity<T> getCorsResponse(T t) {
        HttpHeaders headers = new HttpHeaders();
        System.out.println("Post" + t);
        // Add CORS headers
        headers.add("Access-Control-Allow-Origin", "*");
        headers.add("Access-Control-Allow-Methods", "*");
        headers.add("Access-Control-Allow-Headers", "*");
        headers.add("Access-Control-Allow-Credentials", "true");

        return new ResponseEntity<>(t, headers, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/transcripts", method = RequestMethod.OPTIONS)
    public void optionsRequest(HttpServletResponse response) {
        System.out.println("Options");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "*");
        response.setHeader("Access-Control-Allow-Headers", "*");
        response.setHeader("Access-Control-Allow-Credentials", "true");
    }
}
