package com.mitchellbosecke.reporting;

import com.mitchellbosecke.feeding.Feeding;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/reporting")
public class ReportingController {

    private final Logger logger = LoggerFactory.getLogger(ReportingController.class);

    private final ReportingService reportingService;

    private final FeedingsCsvConverter feedingsCsvConverter;

    public ReportingController(ReportingService reportingService, FeedingsCsvConverter feedingsCsvConverter) {
        this.reportingService = reportingService;
        this.feedingsCsvConverter = feedingsCsvConverter;
    }

    @GetMapping("/all")
    public ResponseEntity<Resource> getAll(){
        String date = LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE);
        String filename = "all-" + date + ".csv";

        List<Feeding> feedings = reportingService.all();
        InputStreamResource file = new InputStreamResource(feedingsCsvConverter.csvFromFeedings(feedings));

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename)
                .contentType(MediaType.parseMediaType("application/csv"))
                .body(file);
    }

}
