package com.mitchellbosecke.reporting;

import com.mitchellbosecke.feeding.Feeding;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;
import org.apache.commons.csv.QuoteMode;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.List;

@Component
public class FeedingsCsvConverter {

    public ByteArrayInputStream csvFromFeedings(List<Feeding> feedings) {
        final CSVFormat format = CSVFormat.Builder.create().setQuoteMode(QuoteMode.MINIMAL).build();

        try (ByteArrayOutputStream out = new ByteArrayOutputStream();
             CSVPrinter csvPrinter = new CSVPrinter(new PrintWriter(out), format)) {

            csvPrinter.printRecord(
                    "ID",
                    "Username",
                    "Date Entered",
                    "Feeding Time",
                    "Food",
                    "Location",
                    "Number of Ducks",
                    "Quantity (cups)");

            for (Feeding feeding : feedings) {
                List<String> data = Arrays.asList(
                        String.valueOf(feeding.getId()),
                        feeding.getUser().getUsername(),
                        String.valueOf(feeding.getDateEntered()),
                        String.valueOf(feeding.getFeedingTime()),
                        feeding.getFood(),
                        feeding.getLocation(),
                        String.valueOf(feeding.getNumberOfDucks()),
                        String.valueOf(feeding.getQuantityCups())
                );

                csvPrinter.printRecord(data);
            }

            csvPrinter.flush();
            return new ByteArrayInputStream(out.toByteArray());
        } catch (IOException e) {
            throw new RuntimeException("fail to import data to CSV file: " + e.getMessage());
        }
    }
}
