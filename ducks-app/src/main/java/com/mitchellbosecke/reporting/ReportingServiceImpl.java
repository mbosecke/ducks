package com.mitchellbosecke.reporting;

import com.mitchellbosecke.feeding.Feeding;
import com.mitchellbosecke.feeding.FeedingDto;
import com.mitchellbosecke.feeding.FeedingRepository;
import com.mitchellbosecke.feeding.FeedingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.util.List;

@Service
@Transactional
public class ReportingServiceImpl implements ReportingService {

    private final Logger logger = LoggerFactory.getLogger(ReportingServiceImpl.class);

    private final FeedingRepository feedingRepository;

    @Autowired
    public ReportingServiceImpl(FeedingRepository feedingRepository) {
        this.feedingRepository = feedingRepository;
    }

    @Override
    public List<Feeding> all() {
        return feedingRepository.findAll();
    }
}
