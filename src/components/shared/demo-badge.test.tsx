import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DemoBadge } from "./demo-badge";
import { FeatureStatus } from "./feature-status";

describe("DemoBadge", () => {
  it("renders demo label", () => {
    render(<DemoBadge />);
    expect(screen.getByTestId("demo-badge")).toHaveTextContent(
      "DATE DEMONSTRATIVE",
    );
  });
});

describe("FeatureStatus", () => {
  it("renders preview mode", () => {
    render(<FeatureStatus feature="muieLex" />);
    expect(screen.getByTestId("feature-status")).toHaveTextContent("PREVIEW");
  });
});
