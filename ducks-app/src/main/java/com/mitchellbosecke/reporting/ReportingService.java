package com.mitchellbosecke.reporting;

import com.mitchellbosecke.feeding.Feeding;
import com.mitchellbosecke.feeding.FeedingDto;

import java.util.List;

public interface ReportingService {

    List<Feeding> all();

}
