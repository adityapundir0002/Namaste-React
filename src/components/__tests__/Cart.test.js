import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should Load the Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    );
  });
  const accHeader = screen.getByText("Veg Pizza (14)");
  fireEvent.click(accHeader);
  expect(screen.getAllByTestId("accList").length).toBe(14);

  const addBtn = screen.getAllByRole("button", { name: "+" });
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart - (1 Items)"));

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart - (2 Items)"));

  expect(screen.getAllByTestId("accList").length).toBe(16);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("accList").length).toBe(14);
});
