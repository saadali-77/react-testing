
import { render ,screen} from "@testing-library/react";
import { Application } from "./application";

describe('application',()=>{
    test('check test',()=>{
      render(<Application/>)  
   const Element=  screen.getByRole('textbox',{
    name:"Name"
   }) // we specify {with key value} and put label name for get by role options
  
   expect(Element).toBeInTheDocument()
const HeadElement= screen.getByRole('heading',{
    level:2
})
expect(HeadElement).toBeInTheDocument()

const EleTerms= screen.getByLabelText('I agree terms and conditions',{
    selector:'input'
})
expect(EleTerms).toBeInTheDocument()
   const Elementselect= screen.getByRole('combobox')
   expect(Elementselect).toBeInTheDocument()
   const ElementButton= screen.getByRole('button')
   expect(ElementButton).toBeInTheDocument()
    })
})