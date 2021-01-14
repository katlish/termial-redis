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
      const { value:inputValue, bind:bindInputValue, reset:resetInputValue } = useInput('');
      const [stateTerminal, dispatch] = useReducer(inputReducer, {terminalHistory: []});
      console.log("stateTermial --- ", stateTerminal.terminalHistory);
      

      //TODO: bug!!! - stateTerminal updated twice
      const handleSubmit = (evt: any) :void => {
          evt.preventDefault();
          const parsedInput: ActionType = inputParser(inputValue);
          console.log("stateTerminal BEFORE dispatch - ", stateTerminal.terminalHistory)
  
          dispatch({...parsedInput});
          resetInputValue();
          console.log("stateTerminal AFTER dispatch - ", stateTerminal.terminalHistory)
      }
      

      return (
      <>
        {console.log("STATE IN RETURN - ",stateTerminal.terminalHistory)}
        {childrenAsFunction({ 
          outputResults: stateTerminal.terminalHistory,  
          handleSubmit,
          bind: bindInputValue
          })}
      </>);
  }

  export default TerminalController;