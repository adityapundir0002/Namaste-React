import { screen, render, fireEvent } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should Load Header with a Login button", () => {
  render(
    <BrowserRouter>
      {" "}
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const button = screen.getByRole("button", { Name: "login" });
  expect(button).toBeInTheDocument();
});

it("Should Render Cart in header", () => {
  render(
    <BrowserRouter>
      {" "}
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("Should Render Cart in header with 0 items", () => {
  render(
    <BrowserRouter>
      {" "}
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("Cart - (0 Items)");
  expect(cartItems).toBeInTheDocument();
});

it("Should Render logout Button on click of login", () => {
  render(
    <BrowserRouter>
      {" "}
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { Name: "login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { Name: "logout" });
  expect(logoutButton).toBeInTheDocument();
});
