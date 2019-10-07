import moment from "moment";

export const getTimeFromDateTime = dateTime => moment(dateTime).format("HH:mm");

export const getDayNameFromDate = date => moment(date).format("dddd");
