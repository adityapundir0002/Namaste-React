import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/resCardMock.json";
import ResCard from "../ResCard";

it("Should render the REstaurant Card", () => {
  render(<ResCard resData={MOCK_DATA} />);
  const resName = screen.getByText("Palmgrove Ballal Residency");
  expect(resName).toBeInTheDocument();
});
