import { render } from "@testing-library/react"
import ToDo from "./ToDo"


describe("TODO.tsx testing", () => {

    it("It should be in the document.", () => {
       const {getByTestId} = render(<ToDo />)
    
       expect(getByTestId("todo-container")).toBeInTheDocument()
       
       expect(getByTestId("todo-heading")).toBeInTheDocument()
       expect(getByTestId("todo-heading")).toHaveTextContent("TODO List.")


    })

})