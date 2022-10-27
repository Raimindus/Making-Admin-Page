import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import renderWithProviders from "../../helper/test-utils";
import Pagination from "../Pagination";

describe("pagination", () => {
  it("should render correct page number", async () => {
    const mockPagination = jest.fn();
    const { getByText } = renderWithProviders(
      <Pagination pageNumber={46} paginate={mockPagination} page={1} />
    );
    expect(getByText(1)).toBeVisible();
    expect(getByText(2)).toBeVisible();
    expect(getByText(3)).toBeVisible();
    expect(getByText(4)).toBeVisible();
    expect(getByText(5)).toBeVisible();
    expect(getByText(6)).toBeVisible();
    expect(getByText(7)).toBeVisible();
    expect(getByText(46)).toBeVisible();

    act(() => userEvent.click(getByText(6)));

    expect(mockPagination).toBeCalledWith(6);
  });
});
