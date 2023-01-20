import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { WrappedApp, App } from "../App";

describe("App", () => {
  it("Render hello world", () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT

    // EXPECT
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Hello World");
  });

  it("Render not found if path is invalid", () => {
    render(
      <MemoryRouter initialEntries={["/invalid-path"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Not Found");
  });
});
