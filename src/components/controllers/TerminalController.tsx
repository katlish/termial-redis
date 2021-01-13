import React, {useReducer}  from "react";
import {useInput} from '../../hooks/InputHook';
import {inputReducer} from './Reducer';
import {inputParser} from './InputParser';


interface IControllerProps {
  childrenAsFunction: (props: any) => JSX.Element
}

export interface StateType{
  terminalHistory: TerminalHistoryLog[]
}

export interface TerminalHistoryLog {
  req: string,
  res: string
}

export interface ActionType{
  type: string,
  payload: CommandPayload
}

export interface CommandPayload{
  key: string,
  value: string
}


function TerminalController({childrenAsFunction}: IControllerProps){
    try {
      const { value:inputValue, bind:bindInputValue, reset:resetInputValue } = useInput('');
      const [stateTerminal, dispatch] = useReducer(inputReducer, {terminalHistory: []});
      console.log("stateTermial --- ", stateTerminal);
  
      const handleSubmit = (evt: any) :void => {
          evt.preventDefault();
          const parsedInput: ActionType = inputParser(inputValue);
  
          dispatch({
            type: parsedInput.type,
            payload: parsedInput.payload
          });
          resetInputValue();
      }
      

      return <>{childrenAsFunction({ 
        outputResults: stateTerminal.terminalHistory,  
        handleSubmit,
        bind: bindInputValue })}</>;

    }catch(e){
      throw e; 
    }
  }

  export default TerminalController;