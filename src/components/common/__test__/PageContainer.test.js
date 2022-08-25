import PageContainer from "../PageContainer";
import { screen, render } from "@testing-library/react";

it("render properly", () => {
  const mockChild = <div>child</div>;
  render(<PageContainer>{mockChild}</PageContainer>);
  const child = screen.getByText("child");
  expect(child).toBeInTheDocument();
});
