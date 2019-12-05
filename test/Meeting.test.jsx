import React from "react";
import ReactDOM from "react-dom";
import { Meeting } from "../src/Meeting";

describe("Meeting", () => {
  it("renders the team name", () => {
    const team = { name: "Team A" };
    const container = document.createElement("div");

    // basically just a simple emulation of Enzyme's work here
    ReactDOM.render(<Meeting team={team} />, container);

    expect(container.textContent).toMatch("Team A");
  });
  // triangulation
  it("renders another team name", () => {
    const team = { name: "Team B" };
    const container = document.createElement("div");

    ReactDOM.render(<Meeting team={team} />, container);

    expect(container.textContent).toMatch("Team B");
  });
});
