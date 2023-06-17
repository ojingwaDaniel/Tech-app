import { render,screen} from "@testing-library/react";
import {TextCheck } from "./text";
test('Checking for a text',()=>{
    render(<TextCheck/>)
    const text = screen.getByText(/Self Discipline/);
    expect(text).toHaveTextContent("Self Discipline");
})