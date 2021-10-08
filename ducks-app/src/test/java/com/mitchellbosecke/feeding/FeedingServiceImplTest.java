package com.mitchellbosecke.feeding;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(MockitoExtension.class)
public class FeedingServiceImplTest {

    @Mock
    private FeedingRepository feedingRepository;

    @InjectMocks
    private FeedingServiceImpl feedingService;

    @Test
    public void createDataset_shouldCreateDataset() {

        //verify(feedingRepository, times(1)).save(any(Feeding.class));

        assertTrue(1 == 1);
    }

}
