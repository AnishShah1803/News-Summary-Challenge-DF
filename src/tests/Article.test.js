import { render, screen } from "@testing-library/react";
import Article from "../components/Article";
import mockNewsData from "../mockNewsData.json";
import { MemoryRouter } from "react-router-dom";
// jest.mock("react-router-dom/useParams", () => {
// 	return jest.fn(() => ({
// 		id: "business-2022-jul-20-royal-mail-threatens-to-split-up-business-losing-pounds-1m-a-day-strike",
// 	}));
// });
describe("ArticleSummary component test suite", () => {
	// beforeEach(() => {
	// 	render(<Article newsData={mockNewsData.response.results} />);
	// });

	// test("it should render the correct components", () => {
	// 	const headlineComponent = screen.getByTestId(`headlineCard`);
	// 	const articleText = screen.getByTestId(`articleBody`);
	// 	expect(headlineComponent).toBeVisible();
	// 	expect(articleText).toBeVisible();
	// });
	test("the Article should render", () => {
		const summary = render(
			<Article newsData={mockNewsData.response.results} />
		);
		expect(summary).toBeTruthy();
	});
});
