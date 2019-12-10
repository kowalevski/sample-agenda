import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import {
  MeetingsDayView,
  noMeetingsForTodayText
} from '../src/MeetingsDayView';

describe('MeetingsDayView', () => {
  let container;
  const today = new Date();
  const meetings = [
    {
      startsAt: today.setHours(11, 0),
      team: {
        name: 'A'
      }
    },
    {
      startsAt: today.setHours(12, 0),
      team: {
        name: 'B'
      }
    }
  ];
  const FIRST_MEETING_INDEX = 0;
  const SECOND_MEETING_INDEX = 1;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = component => ReactDOM.render(component, container);

  it('renders a div element with right id', () => {
    render(<MeetingsDayView meetings={[]} />);
    expect(container.querySelector('div#meetingsDayView')).not.toBeNull();
  });
  it('renders message about that there are no meetings today', () => {
    render(<MeetingsDayView meetings={[]} />);
    expect(container.textContent).toMatch(noMeetingsForTodayText);
  });
  it('selects the first meeting by default', () => {
    render(<MeetingsDayView meetings={meetings} />);
    expect(container.textContent).toMatch(
      meetings[FIRST_MEETING_INDEX].team.name
    );
  });
  it('renders few meetings in a ol element', () => {
    render(<MeetingsDayView meetings={meetings} />);
    expect(container.querySelector('ol')).not.toBeNull();
    expect(container.querySelector('ol').children).toHaveLength(
      meetings.length
    );
  });
  it('renders each meeting in on li', () => {
    render(<MeetingsDayView meetings={meetings} />);
    expect(container.querySelectorAll('li')).toHaveLength(meetings.length);
    expect(
      container.querySelectorAll('li')[FIRST_MEETING_INDEX].textContent
    ).toEqual('11:00');
    expect(
      container.querySelectorAll('li')[SECOND_MEETING_INDEX].textContent
    ).toEqual('12:00');
  });
  it('renders a button element in each li', () => {
    render(<MeetingsDayView meetings={meetings} />);
    expect(container.querySelectorAll('li > button')).toHaveLength(2);
    expect(
      container.querySelectorAll('li > button')[FIRST_MEETING_INDEX].type
    ).toEqual('button');
  });
  it('renders another meeting when selected', () => {
    render(<MeetingsDayView meetings={meetings} />);
    const button = container.querySelectorAll('button')[SECOND_MEETING_INDEX];
    ReactTestUtils.Simulate.click(button);
    expect(container.textContent).toMatch(
      meetings[SECOND_MEETING_INDEX].team.name
    );
  });
});
