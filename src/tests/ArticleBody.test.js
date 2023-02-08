import { render, screen } from "@testing-library/react";
import mockNewsData from "../mockNewsData.json";
import ArticleBody from "../components/ArticleBody";

describe("ArticleBody tests", () => {
	const summary = mockNewsData.response.results[0].fields.bodyText;
	beforeEach(() => {
		render(<ArticleBody summary={summary} />);
	});
	test("Renders the correct body from the article", () => {
		const result = screen.getByText(summary);
		expect(result).toBeVisible();
		expect(result).toBeInTheDocument();
	});
	test("Renders the correct component in the article", () => {
		expect(screen.getByTestId("articleBody")).toContainHTML(`p`);
	});
});
