import React from "react";

import { DayCard } from "./DayCard";
import { DayCardHeader } from "./DayCardHeader";
import { DayCardContent } from "./DayCardContent";
import { DayCardText } from "./DayCardText";

export const DayCardLesson = () => {
  return (
    <DayCard backgroundColor="white">
      <DayCardHeader title="Programowanie Aplikacji Internetowych" />
      <DayCardContent>
        <DayCardText text="Start: 09:50" />
        <DayCardText text="End: 11:50" />
        <DayCardText text="Time: 02:00" />
      </DayCardContent>
      <DayCardContent>
        <DayCardText text="Teacher: dr Tomasz Staś" />
        <DayCardText text="Location: A 123" />
      </DayCardContent>
      <DayCardContent>
        <DayCardText text="Wykład z zaliczeniem" />
      </DayCardContent>
    </DayCard>
  );
};
