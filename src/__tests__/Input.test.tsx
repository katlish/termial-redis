import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Input, {IInputProps} from "../components/Input/Input";


function renderInput(props: Partial<IInputProps> = {}) {
    const defaultProps: IInputProps = {
    
      handleSubmit(e) {
        return;
      },
      bind: {
        value: "",
        onChange: (event:any) => {
          return;
        }
      }
    };
    return render(<Input {...defaultProps} {...props} />);
}

describe("<Input />", () => {
  test("should display an empty input element", async () => {
    const { findByTestId } = renderInput();

    const inputComponent = await findByTestId("input-form");

    expect(inputComponent).toHaveFormValues({
        inputCompInput: ""
    });
  });

//   test("should blaaaa", async () => {
//     const handleSubmit = jest.fn();
//     const onChange = jest.fn();

//     const { findByTestId } = renderInput({
//         handleSubmit,
//         bind: {
//             value: "",
//             onChange
//         }
      
//     });
//     const inputComponent = await findByTestId("input-input");
  
//     fireEvent.change(inputComponent,  { target: { value: "password" } });
  
//     expect(handleSubmit).toHaveBeenCalledWith("password");
//   });
});