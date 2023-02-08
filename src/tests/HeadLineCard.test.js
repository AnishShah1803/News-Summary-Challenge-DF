import { render, screen } from "@testing-library/react";
import HeadLineCard from "../components/HeadLineCard";
import mockNewsData from "../mockNewsData.json";
import { MemoryRouter } from "react-router-dom";
describe("Headline card tests", () => {
	const mockNews = mockNewsData.response.results;
	const firstThumbnail = mockNews[0].fields.thumbnail;
	const firstHeadline = mockNews[0].fields.headline;
	test("headline card component renders the correct thumbnail", () => {
		render(
			<MemoryRouter>
				<HeadLineCard thumbnail={firstThumbnail} headline="N/A" />
			</MemoryRouter>
		);
		const result = screen.getByRole(`img`);
		expect(result).toHaveAttribute(`src`, firstThumbnail);
	});
	test("headline card component renders the correct headline", () => {
		render(
			<MemoryRouter>
				<HeadLineCard thumbnail="N/A" headline={firstHeadline} />
			</MemoryRouter>
		);
		const result = screen.getByText(firstHeadline);
		expect(result).toBeInTheDocument();
	});
	test("headline card only renders the two elements", () => {
		render(
			<MemoryRouter>
				<HeadLineCard thumbnail={firstThumbnail} headline={firstHeadline} />
			</MemoryRouter>
		);
		expect(screen.getByTestId(`headlineCard`)).toContainHTML(`img`);
		expect(screen.getByTestId(`headlineCard`)).toContainHTML(`h3`);
	});
});
