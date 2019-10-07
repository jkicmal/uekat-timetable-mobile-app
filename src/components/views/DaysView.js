import React from "react";
// TODO: Install this with -S
import axios from "axios";
import styled from "styled-components";
import moment from "moment-timezone";
import {
  getTimeFromDateTime,
  getDayNameFromDate,
} from "../../helpers/dateHelper";
import { AppView } from "./AppView";
import { DayCardSummary } from "../cards/DayCardSummary";
import { DayCardLesson } from "../cards/DayCardLesson";
import { DayCardBreak } from "../cards/DayCardBreak";

// TODO: Days navigation
// <PrevButton> SELECTED_DAY_DATE <NextButton>
// nextValidIndex and previousValudIndex
// If next or prev index is -1 don't render buttons

// TODO: Rename Nav to MainNav

export class DaysView extends React.Component {
  // 0 - Render loader
  // 1 - Download Days with axios and load them to state
  // 2 - Calculate which index has current date
  // 3 - Set calculated day to currentDay
  // 4 - Write functions for previous and next button
  state = {
    days: null,
    currentDayIndex: 0,
    previousDayIndex: -1,
    nextDayIndex: -1,
  };

  async componentDidMount() {
    try {
      // TODO: Get it from env file (api key also)
      const API_URL = "http://10.0.2.2:3000/api/v1/days";
      const results = await axios.get(API_URL);
      if (results.data.data) {
        const days = results.data.data;
        const currentDayIndex = this.getCurrentDayIndex(days);
        const previousDayIndex = 0;
        const nextDayIndex = 0;
        this.setState({
          days,
          currentDayIndex,
          previousDayIndex,
          nextDayIndex,
        });
      } else {
        // UNHANDLED ERROR: No data in API response
      }
    } catch (err) {
      // UNHANDLED ERROR: Couldn't connect with API
    }
  }

  getCurrentDayIndex(days) {
    let index = 0;

    moment.tz.setDefault("Europe/Warsaw");
    const currentDate = moment();

    index = days.findIndex(day => {
      const dayDate = moment(day.date);
      const isValid = currentDate.isSame(dayDate, "date");
      return isValid;
    });

    return index;
  }

  renderCards() {
    const { days, currentDayIndex } = this.state;
    const day = days[currentDayIndex];
    const { lessons, lessonsBreaks, lessonsCount } = day;

    if (lessonsCount !== 0)
      return (
        <View>
          {this.renderSummaryCard(day)}
          {this.renderLessonAndBreakCards(lessons, lessonsBreaks)}
        </View>
      );

    return null;
  }

  renderSummaryCard(day) {
    const {
      startTime,
      endTime,
      totalLessonsBreaksTimeInMins,
      lessonsCount,
      lecturesCount,
      seminar,
    } = day;
    return (
      <DayCardSummary
        dayName={getDayNameFromDate(startTime)}
        startTime={startTime}
        endTime={endTime}
        totalLessonsBreaksTimeInMins={totalLessonsBreaksTimeInMins}
        lessonsCount={lessonsCount}
        lecturesCount={lecturesCount}
        seminar={seminar}
      />
    );
  }

  renderLessonCard(lesson) {
    const {
      startTime,
      endTime,
      durationInMins,
      location,
      description,
    } = lesson;
    const { title, teacher, type } = description;
    return (
      <DayCardLesson
        name={title}
        startTime={getTimeFromDateTime(startTime)}
        endTime={getTimeFromDateTime(endTime)}
        durationInMins={durationInMins}
        teacher={teacher}
        location={location}
        type={type}
      />
    );
  }

  renderLessonBreakCard(lessonBreak) {
    const { startTime, endTime, durationInMins } = lessonBreak;
    return (
      <DayCardBreak
        startTime={getTimeFromDateTime(startTime)}
        endTime={getTimeFromDateTime(endTime)}
        durationInMins={durationInMins}
      />
    );
  }

  renderLessonAndBreakCards(lessons, lessonsBreaks) {
    const lessonsBreaksLength = lessonsBreaks.length;
    return lessons.map((lesson, index) => {
      return (
        <View>
          {this.renderLessonCard(lesson)}
          {lessonsBreaksLength > index
            ? this.renderLessonBreakCard(lessonsBreaks[index])
            : null}
        </View>
      );
    });
  }

  render() {
    const { days } = this.state;
    return <AppView>{days ? this.renderCards() : null}</AppView>;
  }
}

const View = styled.View``;
