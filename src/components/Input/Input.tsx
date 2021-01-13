import React from "react";
import classes from "./Input.module.css";

export interface IInputProps {
    handleSubmit: (event: any) => void,
    bind: any
}
  

function Input({handleSubmit, bind}:IInputProps){
      return (
        <div className={classes.Input}>
            <form data-testid="input-form" onSubmit={handleSubmit}>
                <label className={classes.label}>
                    {`>>>`}
                    <div className={classes.cursor}>
                        <input className={classes.inputElement} name="inputCompInput" type="text" {...bind} />
                        <i></i>
                    </div>
                </label>
            </form>
        </div>
      ) 
      
}

export default Input;