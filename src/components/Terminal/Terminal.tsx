import React from "react";
import classes from "./Terminal.module.css";
import TerminalController from '../controllers/TerminalController';
import Output from "../Output/Output";
import Input from '../Input/Input';


function Terminal(){
  // let [errors, setErrors] = React.useState();

  return (
    <div className={classes.Terminal}>
      {/* {errors && <ErrorDisplay errors={errors} />} 
    <TerminalController setErrors={setErrors}>*/}
      <TerminalController 
        childrenAsFunction={props => 
                              <>
                                <Output {...props} />
                                <Input {...props} />
                              </>
                            } 
      />
    </div>
  ) 
}

export default Terminal;