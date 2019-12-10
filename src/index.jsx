import React from 'react';
import ReactDOM from 'react-dom';
import { MeetingsDayView } from './MeetingsDayView';
import { meetingsData } from './data';

ReactDOM.render(
  <MeetingsDayView meetings={meetingsData} />,
  document.getElementById('root')
);
