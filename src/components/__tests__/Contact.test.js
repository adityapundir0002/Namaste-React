import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Test Cases", () => {
  // beforeAll(() => {
  //   console.log("before All");
  // });

  // beforeEach(() => {
  //   console.log("before Each");
  // });

  // AfterAll(() => {
  //   console.log("After All");
  // });

  // AfterEach(() => {
  //   console.log("After Each");
  // });

  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  // it and test are same thing just alias of each other
  it("Should Load my button in contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should Submit text is present in contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  //  Wrong Test Case
  // test("Should Submit text is present in contact component", () => {
  //   render(<Contact />);
  //   const button = screen.getByPlaceholderText("Karkar");
  //   expect(button).toBeInTheDocument();
  // });

  test("Should input box  is present two times in contact component", () => {
    // Rendering
    render(<Contact />);
    //   querying
    const inputBoxes =
      screen.getAllByRole("textbox"); /* For multiple items we use all */
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
