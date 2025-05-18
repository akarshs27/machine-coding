import { useState } from "react";

import "./App.css";

import Events from "./Events";
import TimeSlots from "./TimeSlots";
import { eventsData } from "./eventsData";

const DayView = () => {
  return (
    <div className="slot-container">
      <div className="line" />
      <TimeSlots />
      <Events events={eventsData} />
    </div>
  );
};

const TimeSlots = () => {
  const slots = Array.from({ length: 24 }, (_, index) => index);
  return (
    <>
      {slots.map((slot) => {
        return (
          <div key={slot} className="slot">
            {slot}:00
          </div>
        );
      })}
    </>
  );
};

const Events = ({ events }) => {
  console.log("Events", events);
  return (
    <>
      {events.map((eachEvent) => {
        const startHour = eachEvent.startTime.split(":")[0];
        const startMin = eachEvent.startTime.split(":")[1];
        const endHour = eachEvent.endTime.split(":")[0];
        const endMin = eachEvent.endTime.split(":")[1];
        const eventTop = startHour * 80 + (startMin / 60) * 80;
        const eventHeight =
          (endHour - startHour) * 80 + ((endMin - startMin) / 60) * 80;
        return (
          <div
            className="each-event"
            style={{ top: `${eventTop}px`, height: `${eventHeight}px` }}
          >
            {eachEvent.title}
          </div>
        );
      })}
    </>
  );
};

function App() {
  return (
    <>
      <DayView />
    </>
  );
}

export default App;

export const eventsData = [
  {
    id: 1,
    title: "Event 1",
    startTime: "4:00:00",
    endTime: "5:00:00",
  },
  {
    id: 2,
    title: "Event 2",
    startTime: "6:00:00",
    endTime: "6:30:00",
  },
  {
    id: 3,
    title: "Event 3",
    startTime: "7:00:00",
    endTime: "8:30:00",
  },
  {
    id: 4,
    title: "Event 4",
    startTime: "10:00:00",
    endTime: "10:15:00",
  },
  {
    id: 5,
    title: "Event 5",
    startTime: "13:30:00",
    endTime: "14:30:00",
  },
];
