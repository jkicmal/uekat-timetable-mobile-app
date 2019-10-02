import React from "react";
import { DayCardHeader } from "./DayCardHeader";
import { DayCard } from "./DayCard";

export const DayCardBreak = () => {
  return (
    <DayCard backgroundColor="white">
      <DayCardHeader title="Break: 50mins" />
    </DayCard>
  );
};
