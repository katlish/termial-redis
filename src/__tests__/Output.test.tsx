import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Output, {IOutputProps} from "../components/Output/Output";


function renderOutput(props: Partial<IOutputProps> = {}) {
    const defaultProps: IOutputProps = {
        outputResults: [{
            req: "request",
            res: "response"
          },
          {
            req: "request",
            res: "response"
          },
          {
            req: "request",
            res: "response"
          }]
    };
    return render(<Output {...defaultProps} {...props} />);
}

describe("<Output />", () => {
  test("should display 3 output results when outputResults contains 3 el.", async () => {
    const { getAllByTestId } = renderOutput();

    const outputRes = await getAllByTestId("output-element");

    expect(outputRes.length).toBe(3)
  });

});