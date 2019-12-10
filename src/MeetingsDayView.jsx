import React, { useState } from 'react';
import { Meeting } from './Meeting';

export const noMeetingsForTodayText = 'There are no meetings for today';

const meetingDayTime = startsAt => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const MeetingsDayView = ({ meetings }) => {
  const [selectedMeeting, setSelectedMeeting] = useState(0);

  return (
    <div id="meetingsDayView">
      <ol>
        {meetings.map((meeting, i) => (
          <li key={meeting.startsAt}>
            <button type="button" onClick={() => setSelectedMeeting(i)}>
              {meetingDayTime(meeting.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {!meetings.length ? (
        <p>{noMeetingsForTodayText}</p>
      ) : (
        <Meeting team={meetings[selectedMeeting].team} />
      )}
    </div>
  );
};
