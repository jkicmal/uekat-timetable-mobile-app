import React from "react";
import { DayCardHeader } from "./DayCardHeader";
import { DayCardContent } from "./DayCardContent";
import { DayCardText } from "./DayCardText";
import { DayCard } from "./DayCard";

export const DayCardBreak = props => {
  const { startTime, endTime, durationInMins } = props;
  return (
    <DayCard backgroundColor="white">
      <DayCardHeader title={`Break: ${durationInMins}min.`} />
      <DayCardContent>
        <DayCardText text={`Start: ${startTime}`} />
        <DayCardText text={`End: ${endTime}`} />
      </DayCardContent>
    </DayCard>
  );
};
