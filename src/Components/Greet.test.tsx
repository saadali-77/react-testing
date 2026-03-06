import { render,screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe('Greets',()=>{

    test('test 1',()=>{
       render(<Greet name="saad"/>)
     const linkelement=   screen.getByText('Hello')
     expect(linkelement).toBeInTheDocument()
    })

    // describe('nested',()=>{

    //     test(' test 2',()=>{
    //        render(<Greet name='saad'/>)
    //      const linkelement=   screen.getByText('Hello saad')
    //      expect(linkelement).toBeInTheDocument()
    //     })


    })



// file name convention .test.tsx or spec.tsx greet-test.tsx
// we can use it instead test also
// with it for focus we use fit and for skip xit