import { render, screen } from "@testing-library/react";
import App from "./App";

console.log("Hello World here and there and everywhere");







test("renders marwiz link", () => {
  render(<App />);






                const linkElement = screen.getByText(/visit our website/i);
expect(linkElement).toBeInTheDocument();
}       







);
