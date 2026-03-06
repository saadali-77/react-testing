import { render,screen } from "@testing-library/react";
import { Greet } from "./Greet";
test('first greet test',()=>{
   render(<Greet/>)
 const linkelement=   screen.getByText(/hello/i)
 expect(linkelement).toBeInTheDocument()
})
test('first greet test 2',()=>{
   render(<Greet name='saad'/>)
 const linkelement=   screen.getByText('Hello saad')
 expect(linkelement).toBeInTheDocument()
})