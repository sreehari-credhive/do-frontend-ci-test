import { describe, expect, test, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Table } from "../components/dashboard/Table";
import { generateFakeData } from "../utils/fakeData";

describe("Table", () => {
  let fakeData: ReturnType<typeof generateFakeData>;

  beforeEach(() => {
    fakeData = generateFakeData(1);
  });

  test("Should render correctly", () => {
    render(
      <Table
        data={fakeData}
        totalPage={1}
        currentPage={1}
        handleNewData={() => {}}
        handlePagination={() => {}}
      />
    );
    expect(screen.getAllByText(fakeData[0].company)).toBeDefined();
  });

  test("Should trigger popup when clicked on Edit Button", () => {
    const handleNewData = vi.fn();
    const handlePagination = vi.fn();

    render(
      <Table
        data={fakeData}
        totalPage={1}
        currentPage={1}
        handleNewData={handleNewData}
        handlePagination={handlePagination}
      />
    );

    const editButton = screen.getByTestId("edit-data-button");

    fireEvent.click(editButton);
    expect(screen.getByTestId("edit-data-modal")).toBeInTheDocument();
  });
});
