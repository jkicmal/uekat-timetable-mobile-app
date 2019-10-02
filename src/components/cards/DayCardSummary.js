import React from "react";

import { DayCard } from "./DayCard";
import { DayCardHeader } from "./DayCardHeader";
import { DayCardContent } from "./DayCardContent";
import { DayCardText } from "./DayCardText";

// TODO: Days navigation
// <PrevButton> SELECTED_DAY_DATE <NextButton>
// nextValidIndex and previousValudIndex
// If next or prev index is -1 don't render buttons

export const DayCardSummary = () => {
  return (
    <DayCard backgroundColor="white">
      <DayCardHeader title="Monday" />
      <DayCardContent>
        <DayCardText text="Start: 08:00" />
        <DayCardText text="End: 15:00" />
        <DayCardText text="Break Mins: 120" />
      </DayCardContent>
      <DayCardContent>
        <DayCardText text="Seminary: yes" />
        <DayCardText text="Lessons: 5" />
        <DayCardText text="Lectures: 3" />
      </DayCardContent>
    </DayCard>
  );
};
