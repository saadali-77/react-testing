
import { render ,screen} from "@testing-library/react";
import { Application } from "./application";

describe('application',()=>{
    test('check test',()=>{
      render(<Application/>)  
   const Element=  screen.getByRole('textbox')
   expect(Element).toBeInTheDocument()
   const Elementselect= screen.getByRole('combobox')
   expect(Elementselect).toBeInTheDocument()
   const ElementButton= screen.getByRole('button')
   expect(ElementButton).toBeInTheDocument()
    })
})