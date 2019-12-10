import React from 'react';
import ReactDOM from 'react-dom';
import { MeetingsDayView } from '../src/MeetingsDayView';

describe('MeetingsDayView', () => {
  let container;
  const today = new Date();
  const meetings = [
    {
      startsAt: today.setHours(11, 0)
    },
    {
      startsAt: today.setHours(12, 0)
    }
  ];

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = component => ReactDOM.render(component, container);

  it('renders a div element with right id', () => {
    render(<MeetingsDayView meetings={[]} />);
    expect(container.querySelector('div#meetingsDayView')).not.toBeNull();
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
    expect(container.querySelectorAll('li')[0].textContent).toEqual('11:00');
    expect(container.querySelectorAll('li')[1].textContent).toEqual('12:00');
  });
});
