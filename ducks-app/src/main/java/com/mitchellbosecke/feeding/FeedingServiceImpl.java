package com.mitchellbosecke.feeding;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class FeedingServiceImpl implements FeedingService {

    private final Logger logger = LoggerFactory.getLogger(FeedingServiceImpl.class);


}
