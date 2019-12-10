import React from 'react';
import ReactDOM from 'react-dom';
import { Meeting } from '../src/Meeting';

describe('Meeting', () => {
  let container;
  let team;

  beforeEach(() => {
    container = document.createElement('div');
  });

  // basically just a simple emulation of Enzyme's work here
  const render = component => ReactDOM.render(component, container);

  it('renders the team name', () => {
    team = { name: 'Team A' };
    render(<Meeting team={team} />);
    expect(container.textContent).toMatch('Team A');
  });
  // triangulation
  it('renders another team name', () => {
    team = { name: 'Team B' };
    render(<Meeting team={team} />);
    expect(container.textContent).toMatch('Team B');
  });
});
