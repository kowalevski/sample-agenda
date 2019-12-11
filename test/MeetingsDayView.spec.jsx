import React from 'react';
import { shallow } from 'enzyme';
import {
  MeetingsDayView,
  noMeetingsForTodayText
} from '../src/MeetingsDayView';

describe('MeetingsDayView', () => {
  describe('has empty list of meetings', () => {
    let container;

    beforeAll(() => {
      container = shallow(<MeetingsDayView meetings={[]} />);
    });

    it('renders a div element with right id', () => {
      expect(container.find('div#meetingsDayView')).not.toBeNull();
    });
    it('renders message about that there are no meetings today', () => {
      expect(container.text()).toMatch(noMeetingsForTodayText);
    });
  });

  describe('has list of two meetings', () => {
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

    beforeAll(() => {
      container = shallow(<MeetingsDayView meetings={meetings} />);
    });

    it('selects the first meeting by default', () => {
      expect(container.html()).toMatch(meetings[FIRST_MEETING_INDEX].team.name);
    });
    it('renders few meetings in a ol element', () => {
      expect(container.find('ol')).not.toBeNull();
      expect(container.find('ol').children()).toHaveLength(meetings.length);
    });
    it('renders each meeting in li', () => {
      expect(container.find('li')).toHaveLength(meetings.length);
      expect(
        container
          .find('li')
          .first()
          .text()
      ).toEqual('11:00');
      expect(
        container
          .find('li')
          .at(SECOND_MEETING_INDEX)
          .text()
      ).toEqual('12:00');
    });
    it('renders a button element in each li', () => {
      expect(container.find('li > button')).toHaveLength(2);
      expect(
        container
          .find('li > button')
          .first()
          .type()
      ).toEqual('button');
    });
    it('renders another meeting when selected', () => {
      const button = container.find('button').at(SECOND_MEETING_INDEX);
      button.simulate('click');
      expect(container.html()).toMatch(
        meetings[SECOND_MEETING_INDEX].team.name
      );
    });
  });
});
