import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("header and footer text", () => {
	beforeEach(() => {
		render(<App />);
	});
	// test("renders header text", () => {
	// 	const headerElement = screen.getByText(/DF NEWS/);
	// 	expect(headerElement).toBeInTheDocument();
	// });

	// test("renders footer text", () => {
	// 	const footerElement = screen.getByText(/Copyright © 2022 DF News/);
	// 	expect(footerElement).toBeInTheDocument();
	// });
	test("App component renders correctly", () => {
		const appComponent = render(<App />);
		expect(appComponent).toBeTruthy();
	});
});
