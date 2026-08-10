import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ComingSoonModal } from "./coming-soon-modal";

describe("ComingSoonModal", () => {
  it("renders when open and closes", () => {
    const onClose = vi.fn();
    render(
      <ComingSoonModal
        open
        onClose={onClose}
        willDo="Va face X"
        missing="Lipsește Y"
      />,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText(/Va face X/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Închide" }));
    expect(onClose).toHaveBeenCalled();
  });
});
