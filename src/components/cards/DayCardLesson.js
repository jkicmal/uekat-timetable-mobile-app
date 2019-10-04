import React from "react";

import { DayCard } from "./DayCard";
import { DayCardHeader } from "./DayCardHeader";
import { DayCardContent } from "./DayCardContent";
import { DayCardText } from "./DayCardText";

// TODO: Handle props
export const DayCardLesson = props => {
  const {
    name,
    startTime,
    endTime,
    durationInMins,
    teacher,
    location,
    type,
  } = props;
  return (
    <DayCard backgroundColor="white">
      <DayCardHeader title={name} />
      <DayCardContent>
        <DayCardText text={`Start: ${startTime}`} />
        <DayCardText text={`End: ${endTime}`} />
        <DayCardText text={`Time: ${durationInMins}`} />
      </DayCardContent>
      <DayCardContent>
        <DayCardText text={teacher} />
        <DayCardText text={location} />
      </DayCardContent>
      <DayCardContent>
        <DayCardText text={type} />
      </DayCardContent>
    </DayCard>
  );
};
