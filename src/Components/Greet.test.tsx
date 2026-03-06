import { render,screen } from "@testing-library/react";
import { Greet } from "./Greet";
test('first greet test',()=>{
   render(<Greet/>)
 const linkelement=   screen.getByText(/hello/i)
 expect(linkelement).toBeInTheDocument()
})