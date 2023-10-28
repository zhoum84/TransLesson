package vandyhacks.translesson.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import vandyhacks.translesson.backend.service.TranscriptService;

import java.util.Arrays;

@SpringBootTest
class BackendApplicationTests {

    @Test
    void contextLoads() {
        var service = new TranscriptService(null);
        System.out.println(service.translate(Arrays.asList("hello", "I love you"), "es"));
    }

}
