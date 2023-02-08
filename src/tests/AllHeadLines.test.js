import { render, screen } from "@testing-library/react";
import AllHeadLines from "../components/AllHeadLines";
import mockNewsData from "../mockNewsData.json";
import { MemoryRouter } from "react-router-dom";

describe("All headlines test", () => {
	test("it should render the same number of HeadLineCard components as the number of items in the mock data", () => {
		const mockNewsSize = mockNewsData.response.results.length;
		render(
			<MemoryRouter>
				<AllHeadLines newsData={mockNewsData.response.results} />
			</MemoryRouter>
		);
		const headlineCount = screen.getAllByTestId(`headlines`).length;
		expect(headlineCount).toBe(mockNewsSize);
	});
});
