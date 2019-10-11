import React from "react";
import axios from "axios";
import styled from "styled-components";
import moment from "moment-timezone";
import { ActivityIndicator } from "react-native";
import {
  getTimeFromDateTime,
  getDayNameFromDate,
} from "../../helpers/dateHelper";
import {
  getNextArrayValidIndex,
  getPrevArrayValidIndex,
} from "../../helpers/arrayHelper";
import { AppView } from "./AppView";
import { DayCardSummary } from "../cards/DayCardSummary";
import { DayCardLesson } from "../cards/DayCardLesson";
import { DayCardBreak } from "../cards/DayCardBreak";
import { DaysViewNav } from "../navs/DaysViewNav";

// TODO: Rename Nav to MainNav
// TODO: Consider sending start and end times as HH:mm

export class DaysView extends React.Component {
  // 0 - Render loader
  // 1 - Download Days with axios and load them to state
  // 2 - Calculate which index has current date
  // 3 - Set calculated day to currentDay
  // 4 - Write functions for previous and next button
  state = {
    days: null,
    currentDayIndex: 0,
    prevDayIndex: -1,
    nextDayIndex: -1,
    loading: false,
  };

  async componentDidMount() {
    try {
      // TODO: Get it from env file (api key also)
      const API_URL = "http://10.0.2.2:3000/api/v1/days";
      this.setState({ loading: true });
      const results = await axios.get(API_URL, {
        headers: {
          api_key: "sdnfsdfuih385yn23y823b8sfsduosafp38u28uvnsa8d8",
        },
      });
      if (results.data.data) {
        const days = results.data.data;
        const currentDayIndex = this.getCurrentDayIndex(days);
        const prevDayIndex = getPrevArrayValidIndex(days, currentDayIndex);
        const nextDayIndex = getNextArrayValidIndex(days, currentDayIndex);
        this.setState({
          days,
          currentDayIndex,
          prevDayIndex,
          nextDayIndex,
        });
      } else {
        // UNHANDLED ERROR: No data in API response
      }
    } catch (err) {
      // UNHANDLED ERROR: Couldn't connect with API
    } finally {
      this.setState({ loading: false });
    }
  }

  getCurrentDayIndex(days) {
    moment.tz.setDefault("Europe/Warsaw");
    const currentDate = moment();

    return days.findIndex(day => {
      const dayDate = moment(day.date);
      const isValid = currentDate.isSame(dayDate, "date");
      return isValid;
    });
  }

  getCurrentDay() {
    const { days, currentDayIndex } = this.state;
    return days ? days[currentDayIndex] : null;
  }

  setCurrentDayIndex(index) {
    const { days } = this.state;
    const prevDayIndex = getPrevArrayValidIndex(days, index);
    const nextDayIndex = getNextArrayValidIndex(days, index);
    this.setState({ currentDayIndex: index, prevDayIndex, nextDayIndex });
  }

  renderCards() {
    const { days, currentDayIndex } = this.state;
    const day = days[currentDayIndex];
    const { lessons, lessonsBreaks, lessonsCount } = day;

    // If there is no lesson do not render anything
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
    const { days, prevDayIndex, nextDayIndex, loading } = this.state;
    const currentDay = this.getCurrentDay();
    if (loading)
      return (
        <LoaderContainer>
          <ActivityIndicator size="large" />
        </LoaderContainer>
      );
    return (
      <AppView>
        <DaysViewNav
          date={currentDay ? currentDay.date : ""}
          prevDayIndex={prevDayIndex}
          nextDayIndex={nextDayIndex}
          setCurrentDayIndexFn={this.setCurrentDayIndex.bind(this)}
        />
        {days ? this.renderCards() : null}
      </AppView>
    );
  }
}

const View = styled.View``;
const LoaderContainer = styled.View`
  width: 100%;
  height: 100%;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;
