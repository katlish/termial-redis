import React from "react";
import {TerminalHistoryLog} from '../controllers/TerminalController'
import classes from "./Output.module.css";

export interface IOutputProps {
  outputResults: TerminalHistoryLog[]
}


function Output({outputResults}: IOutputProps){
      return (
        <div className={classes.Output}>
           {outputResults.map(
             (obj, i) => {
               return (
                <div data-testid="output-element" key={i}>
                  <div key={i}> {`>>>${obj.req}`} </div>
                  <div key={i*1000+1}> {`${obj.res}`} </div>
                </div>
              )}
           ).reverse()}
           
        </div>
      ) 
      
}

export default Output;