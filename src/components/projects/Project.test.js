import { screen, render, fireEvent } from "@testing-library/react";
import Project from "../projects/Project.component";

describe("make sure all the user-elements are there", () => {
  it("should contain a heading New Project", () => {
    render(<Project />);

    const projectHeading = screen.getByRole("heading", {
      name: /new project/i,
    });
    expect(projectHeading).toBeInTheDocument();
  });

  it("should contain a project name textfield", () => {
    render(<Project />)
   const projectNameInput = screen.getByLabelText(/project name/i)
    expect(projectNameInput).toBeInTheDocument();
  });

  it("should contain a description textfield", () => {
    render(<Project />)
   const descriptionInput = screen.getByLabelText(/description/i)
    expect(descriptionInput).toBeInTheDocument();
  });

  it("should contain an OK button", () => {
    render(<Project/>)
    const okButton = screen.getByRole('button', {
      name: /ok/i
    })
  });

  it("should contain a cancel button", () => {
    render(<Project/>)
    const cancelButton = screen.getByRole('button',{name: /cancel/i})
  });

  it("should contain an alert message",()=>{
    render(<Project/>)
   const alertMessage = screen.getByRole('alert')
  })
});

describe("storing the entered data", ()=>{
  it("should contain the correct project name value",()=>{
    render(<Project/>)
    const projectNameInput = screen.getByLabelText(/project name/i)
    
    fireEvent.change(projectNameInput,{target: {value: "Project 1"}})

    const projectNameValue=screen.getByDisplayValue("Project 1")
    expect(projectNameValue).toBeInTheDocument();
  })

  it("should contain the correct description value",()=>{
    render(<Project />)
    const descriptionInput = screen.getByLabelText(/description/i)
    fireEvent.change(descriptionInput,{target: {value: "this is project 1 description"}})

    const descriptionValue = screen.getByDisplayValue("this is project 1 description")

    expect(descriptionValue).toBeInTheDocument();
  })
})

