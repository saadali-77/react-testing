import { render,screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe('Greets',()=>{

    test('test 1',()=>{
       render(<Greet/>)
     const linkelement=   screen.getByText(/hello/i)
     expect(linkelement).toBeInTheDocument()
    })

    describe('nested',()=>{

        test(' test 2',()=>{
           render(<Greet name='saad'/>)
         const linkelement=   screen.getByText('Hello saad')
         expect(linkelement).toBeInTheDocument()
        })


    })


})
