import Home from "@/pages"
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"

describe("Calculator", () => {

   it("renders a calculator", () => {
      render(<Home />) 
      expect(screen.getByTestId("result")).toBeInTheDocument()
   })
   it("adds to number ", () => {
      render(<Home />) 
      const num1input = screen.getByTestId("num1")
      const num2input = screen.getByTestId("num2")
      const addButton = screen.getByTestId("add")
      const result = screen.getByTestId("result")

      fireEvent.change(num1input, {target: {value: 5}})
      fireEvent.change(num2input, {target: {value: 8}})

      fireEvent.click(addButton)

      expect(result).toHaveTextContent("13")
   }) 
   it("adds to number ", () => {
      render(<Home />) 
      const num1input = screen.getByTestId("num1")
      const num2input = screen.getByTestId("num2")
      const addButton = screen.getByTestId("add")
      const result = screen.getByTestId("result")

      fireEvent.change(num1input, {target: {value: 5}})
      fireEvent.change(num2input, {target: {value: 8}})

      fireEvent.click(addButton)

      expect(result).toHaveTextContent("13")
   }) 
   it("subtracts to number ", () => {
      render(<Home />) 
      const num1input = screen.getByTestId("num1")
      const num2input = screen.getByTestId("num2")
      const addButton = screen.getByTestId("subtract")
      const result = screen.getByTestId("result")

      fireEvent.change(num1input, {target: {value: 5}})
      fireEvent.change(num2input, {target: {value: 8}})

      fireEvent.click(addButton)

      expect(result).toHaveTextContent("-3")
   
   })
   it("multiplies to number ", () => {
      render(<Home />) 
      const num1input = screen.getByTestId("num1")
      const num2input = screen.getByTestId("num2")
      const addButton = screen.getByTestId("multiply")
      const result = screen.getByTestId("result")

      fireEvent.change(num1input, {target: {value: 5}})
      fireEvent.change(num2input, {target: {value: 8}})

      fireEvent.click(addButton)

      expect(result).toHaveTextContent("40")
   })
})