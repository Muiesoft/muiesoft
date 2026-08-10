import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ModulePlaceholder } from "./module-placeholder";
import { getModulePlaceholder } from "@/config/module-placeholders";

describe("ModulePlaceholder", () => {
  it("renders all seven sections", () => {
    render(
      <ModulePlaceholder content={getModulePlaceholder("muieLex.pipeline")} />,
    );
    expect(screen.getByTestId("module-placeholder")).toBeInTheDocument();
    expect(screen.getByText("1. Ce problemă rezolvă")).toBeInTheDocument();
    expect(screen.getByText("2. Cum va funcționa")).toBeInTheDocument();
    expect(screen.getByText("3. Cum arată acum")).toBeInTheDocument();
    expect(screen.getByText("4. Arhitectură")).toBeInTheDocument();
    expect(screen.getByText("5. Ce construim în continuare")).toBeInTheDocument();
    expect(screen.getByText("6. Roadmap")).toBeInTheDocument();
    expect(screen.getByText("7. Contribuie")).toBeInTheDocument();
  });
});
