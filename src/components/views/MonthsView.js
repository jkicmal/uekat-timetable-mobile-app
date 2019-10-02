import { Component } from "react";
import { getArrayValidIndex } from "../../helpers/arrayHelper";

// 1. Get calendar from API
/**
 * {
 *  data: [
 *      {
 *          date: "2018-05-01",
 *          days: [
 *              {
 *                  date: "2018-05-01",
 *                  dayName: "monday",
 *                  lessonsCount: 5,
 *                  lecturesCount: 3,
 *                  startTime: 09:50,
 *                  endTime: 15:20,
 *                  breakTime: 03:20,
 *                  seminary: true
 *              }
 *          ]
 *      }
 *  ]
 * }
 */
// 2. Calculate current month index (moment)
// 3. Set calendar and current month index
// 4. Render elements
// 5. Create buttons for next and previous month

export class MonthsView extends Component {
  state = {
    months: null,
    currentMonthIndex: 0,
    previousMonthIndex: -1, // If -1 don't render previous button
    nextMonthIndex: -1, // If -1 don't render next button
  };

  getCalendarDataFromAPI() {
    const months = [{}];

    // TODO: Implement fetching and install axios

    const currentMonthIndex = this.calculateCurrentMonthIndex(months);
    const nextMonthIndex = getArrayValidIndex(months, currentMonthIndex + 1);
    const previousMonthIndex = getArrayValidIndex(
      months,
      currentMonthIndex - 1,
    );
    this.setState({
      months,
      currentMonthIndex,
      nextMonthIndex,
      previousMonthIndex,
    });
  }

  calculateCurrentMonthIndex(months) {
    // TODO:
    // 0. Get current date from moment
    // 1. Set day of this date to 1
    // 2. Loop through months and return index with current month
    // 3. month.date = currentMonthDate (moment equals function)
  }

  render() {
    return "";
  }
}
