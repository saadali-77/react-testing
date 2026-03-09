export {}

 import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import userEvent from "@testing-library/user-event";

describe('counter test', () => {

  test('renders a count of 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })









  test('click test', async () => {
    const user = userEvent.setup();

    render(<Counter />);

    const RenderCounter = screen.getByRole('button', {
      name: /increment/i
    });

    await user.click(RenderCounter);
   const Newsc= screen.getByRole('heading',{
    level:1
   })
    expect(Newsc).toHaveTextContent('1')
  });
});