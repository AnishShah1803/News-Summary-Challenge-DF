import { render } from "@testing-library/react";
import Footer from "../components/Footer";

test(`Footer matches snapshot`, () => {
	const FooterComponent = render(<Footer />);
	expect(FooterComponent).toMatchSnapshot();
});
