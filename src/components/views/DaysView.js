import React from "react";
// TODO: Install this with -S
import axios from "axios";
import styled from "styled-components";
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
    daysTest: [
      {
        weekDayName: "Monday",
        date: "2019-10-01",
        startTime: "08:00",
        endTime: "15:00",
        breakMins: 120,
        lessonsCount: 5,
        lecutresCount: 3,
        seminar: true,
        lessons: [
          {
            name: "Programowanie",
            startTime: "08:00",
            endTime: "11:50",
            durationInMins: "120",
            teacher: "dr Tomasz Staś",
            location: "A 123",
            type: "Wykład z zaliczeniem",
          },
          {
            name: "Ekonomia",
            startTime: "12:00",
            endTime: "13:50",
            durationInMins: "120",
            teacher: "dr Tomasz Staś",
            location: "A 123",
            type: "Wykład z zaliczeniem",
          },
        ],
        breaks: [
          {
            startTime: "11:50",
            endTime: "12:50",
            durationInMins: "60",
          },
        ],
      },
    ],
    days: [],
    currentDayIndex: 0,
    previousDayIndex: -1,
    nextDayIndex: -1,
  };

  async componentDidMount() {
    try {
      // TODO: Get it from env file (api key also)
      const API_URL = "";
      const results = await axios.get(API_URL);
      if (results.data) {
        const days = results.data;
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
    // TODO: Do this with moment
    return 0;
  }

  renderCards() {
    const { daysTest, currentDayIndex } = this.state;
    const {
      weekDayName,
      startTime,
      endTime,
      breakMins,
      lessonsCount,
      lecutresCount,
      seminar,
      lessons,
      breaks,
    } = daysTest[currentDayIndex];
    return (
      <View>
        <DayCardSummary
          weekDayName={weekDayName}
          startTime={startTime}
          endTime={endTime}
          breakMins={breakMins}
          lessonsCount={lessonsCount}
          lecutresCount={lecutresCount}
          seminar={seminar}
        />
        {this.renderLessonAndBreakCards(lessons, breaks)}
        {/* TODO: Render breaks */}
      </View>
    );
  }

  renderLessonCard(lesson) {
    const {
      name,
      startTime,
      endTime,
      durationInMins,
      teacher,
      location,
      type,
    } = lesson;
    return (
      <DayCardLesson
        name={name}
        startTime={startTime}
        endTime={endTime}
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
        startTime={startTime}
        endTime={endTime}
        durationInMins={durationInMins}
      />
    );
  }

  // FIXME: Max call stack exceeded
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
    return <AppView>{this.renderCards()}</AppView>;
  }
}

const View = styled.View``;
