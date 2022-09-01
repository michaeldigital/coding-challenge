import Home from "src/pages"
import {render, screen} from "@testing-library/react"
import user from "@testing-library/user-event"

const renderComponent = () =>{
    render(<Home />)
}

it("render title, button by default", ()=>{
    renderComponent()
    const title = screen.getByRole("heading", {level:1, name:"Account Calculator"})
    const button = screen.getByRole("button", {name:"Print values"})
    const table = screen.queryByRole("table")
    expect(title).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(table).not.toBeInTheDocument()
})

it("render table after user click", async()=>{
    renderComponent()

    const button = screen.getByRole("button", {name:"Print values"})
 

   user.click(button)
    const table = await screen.findByRole("table")

    expect(table).toBeInTheDocument()
})