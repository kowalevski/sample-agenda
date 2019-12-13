import React from 'react';
import { shallow } from 'enzyme';
import { Meeting } from '../src/Meeting';

describe('Meeting', () => {
  describe('has first team in props', () => {
    let container;
    let team;

    it('renders the team name', () => {
      team = { name: 'Team A' };
      container = shallow(<Meeting team={team} />);
      expect(container.text()).toMatch('Team A');
    });
  });
  describe('has second one team in props', () => {
    let container;
    let team;

    // triangulation
    it('renders another team name', () => {
      team = { name: 'Team B' };
      container = shallow(<Meeting team={team} />);
      expect(container.text()).toMatch('Team B');
    });
  });
});
