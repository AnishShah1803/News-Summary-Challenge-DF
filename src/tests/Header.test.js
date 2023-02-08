import { render } from "@testing-library/react";
import Header from "../components/Header";

test(`Header matches snapshot`, () => {
	const headerComponent = render(<Header />);
	expect(headerComponent).toMatchSnapshot();
});
