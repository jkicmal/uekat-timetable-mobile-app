import React from "react";
import axios from "axios";
import { AppView } from "./AppView";
import { DayCardSummary } from "../cards/DayCardSummary";
import { DayCardLesson } from "../cards/DayCardLesson";
import { DayCardBreak } from "../cards/DayCardBreak";

export class DaysView extends React.Component {
  // 0 - Render loader
  // 1 - Download Days with axios and load them to state
  // 2 - Calculate which index has current date
  // 3 - Set calculated day to currentDay
  // 4 - Write functions for previous and next button
  state = {
    lessons: [],
    currentLessonIndex: 0,
    previousLessonIndex: -1,
    nextLessonIndex: -1,
  };

  async componentDidMount() {
    try {
      // TODO: Get it from env file (api key also)
      const API_URL = "";
      const results = await axios.get(API_URL);
      if (results.data) {
        const lessons = results.data;
        const currentLessonIndex = this.getCurrentLessonIndex(lessons);
        const previousLessonIndex = 0;
        const nextLessonIndex = 0;
        this.setState({
          lessons,
          currentLessonIndex,
          previousLessonIndex,
          nextLessonIndex,
        });
      } else {
        // UNHANDLED ERROR: No data in API response
      }
    } catch (err) {
      // UNHANDLED ERROR: Couldn't connect with API
    }
  }

  // TODO:
  getCurrentLessonIndex(lessons) {
    return 0;
  }

  render() {
    return (
      <AppView>
        <DayCardSummary />
        <DayCardLesson />
        <DayCardBreak />
      </AppView>
    );
  }
}
