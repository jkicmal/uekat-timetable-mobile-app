import React from "react";

import { DayCard } from "./DayCard";
import { DayCardHeader } from "./DayCardHeader";
import { DayCardContent } from "./DayCardContent";
import { DayCardText } from "./DayCardText";

// TODO: Handle props
export const DayCardSummary = props => {
  const {
    dayName,
    startTime,
    endTime,
    lessonsBreaksDurationInMins,
    seminar,
    lessonsCount,
    lecturesCount,
  } = props;
  return (
    <DayCard backgroundColor="white">
      <DayCardHeader title="Monday" />
      <DayCardContent>
        <DayCardText text="Start: 08:00" />
        <DayCardText text="End: 15:00" />
        <DayCardText text="Break Mins: 120" />
      </DayCardContent>
      <DayCardContent>
        <DayCardText text="Seminar: yes" />
        <DayCardText text="Lessons: 5" />
        <DayCardText text="Lectures: 3" />
      </DayCardContent>
    </DayCard>
  );
};
