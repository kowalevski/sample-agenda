import React from 'react';
import { shallow } from 'enzyme';
import { Meeting } from '../src/Meeting';

describe('Meeting', () => {
  let container;
  let team;

  it('renders the team name', () => {
    team = { name: 'Team A' };
    container = shallow(<Meeting team={team} />);
    expect(container.text()).toMatch('Team A');
  });
  // triangulation
  it('renders another team name', () => {
    team = { name: 'Team B' };
    container = shallow(<Meeting team={team} />);
    expect(container.text()).toMatch('Team B');
  });
});
