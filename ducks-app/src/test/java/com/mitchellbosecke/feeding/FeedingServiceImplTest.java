package com.mitchellbosecke.feeding;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.DateTimeException;
import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class FeedingServiceImplTest {

    @Mock
    private FeedingRepository feedingRepository;

    @InjectMocks
    private FeedingServiceImpl feedingService;

    @Test
    public void add_shouldSaveToRepository() {

        FeedingDto dto = new FeedingDto(LocalDateTime.now(), "America/Edmonton", "food", "location", 1, 2);
        Feeding feeding = feedingService.add(dto);
        verify(feedingRepository, times(1)).save(any(Feeding.class));

        assertNotNull(feeding.getUserId());
    }

    @Test
    public void add_shouldMapFieldsCorrectly() {

        FeedingDto dto = new FeedingDto(LocalDateTime.now(), "America/Edmonton", "food", "location", 1, 2);
        Feeding feeding = feedingService.add(dto);

        assertEquals("food", feeding.getFood());
        assertEquals("location", feeding.getLocation());
        assertEquals(1, feeding.getNumberOfDucks());
        assertEquals(2, feeding.getQuantityCups());
    }

    @Test
    public void add_withNullTimezone_shouldThrow() {
        String timezone = null;
        FeedingDto dto = new
                FeedingDto(LocalDateTime.now(), timezone, "food", "location", 1, 2);
        assertThrows(RuntimeException.class, () -> feedingService.add(dto));
    }

    @Test
    public void add_withInvalidTimezone_shouldThrow() {
        String timezone = "Mars/Invalid";
        FeedingDto dto = new
                FeedingDto(LocalDateTime.now(), timezone, "food", "location", 1, 2);
        assertThrows(DateTimeException.class, () -> feedingService.add(dto));
    }

}
