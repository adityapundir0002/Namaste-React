import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import Body from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search resList for burger input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBefSearch = screen.getAllByTestId("resCard");
  expect(cardsBefSearch.length).toBe(8);

  const searchButton = screen.getByRole("button", { name: "Search" });
  // console.log("searchButton.length", searchButton.length);
  // expect(searchButton).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchButton);
  // expect(searchInput).toBeInTheDocument();
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1);
});

it("Should Search resLIst for top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBefFilter = screen.getAllByTestId("resCard");
  expect(cardsBefFilter.length).toBe(8);
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  const cardsAftFilter = screen.getAllByTestId("resCard");
  expect(cardsAftFilter.length).toBe(5);
});
