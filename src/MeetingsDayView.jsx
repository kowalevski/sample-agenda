import React from 'react';

const meetingDayTime = startsAt => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const MeetingsDayView = ({ meetings }) => (
  <div id="meetingsDayView">
    <ol>
      {meetings.map(meeting => (
        <li key={meeting.startsAt}>{meetingDayTime(meeting.startsAt)}</li>
      ))}
    </ol>
  </div>
);
