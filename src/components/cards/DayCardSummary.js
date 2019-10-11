import React from "react";
import { getTimeFromDateTime } from "../../helpers/dateHelper";
import { DayCard } from "./DayCard";
import { DayCardHeader } from "./DayCardHeader";
import { DayCardContent } from "./DayCardContent";
import { DayCardText } from "./DayCardText";

export const DayCardSummary = props => {
  const {
    dayName,
    startTime,
    endTime,
    totalLessonsBreaksTimeInMins,
    seminar,
    lessonsCount,
    lecturesCount,
  } = props;
  return (
    <DayCard backgroundColor="white">
      <DayCardHeader title={dayName} />
      <DayCardContent>
        <DayCardText text={`Start: ${getTimeFromDateTime(startTime)}`} />
        <DayCardText text={`End: ${getTimeFromDateTime(endTime)}`} />
        <DayCardText text={`Break Mins: ${totalLessonsBreaksTimeInMins}`} />
      </DayCardContent>
      <DayCardContent>
        <DayCardText text={`Seminar: ${seminar}`} />
        <DayCardText text={`Lessons: ${lessonsCount}`} />
        <DayCardText text={`Lectures: ${lecturesCount}`} />
      </DayCardContent>
    </DayCard>
  );
};
