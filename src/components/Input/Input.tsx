import React, {useRef, useEffect} from "react";
import classes from "./Input.module.css";

export interface IInputProps {
    handleSubmit: (event: any) => void,
    bind: any
}
  

function Input({handleSubmit, bind}:IInputProps){
      const inputRef = useRef<HTMLInputElement>();
      
      useEffect(() => {
        if(inputRef && inputRef.current) {
            inputRef.current.focus();
        }
      }, []);
      
      return (
        <div className={classes.Input}>
            <form data-testid="input-form" onSubmit={handleSubmit}>
                <label className={classes.label}>
                    {`>>>`}
                    <input className={classes.inputElement} ref={inputRef} name="inputCompInput" type="text" {...bind} />
                </label>
            </form>
        </div>
      ) 
      
}

export default Input;