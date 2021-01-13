import {StateType, ActionType, TerminalHistoryLog} from './TerminalController'

export enum CommandType {
    SET = 'set',
    GET = 'get',
    DELETE = 'del'
}

export function inputReducer(state: StateType, action: ActionType) : StateType{
    console.log("inputReducer will push into state - ",state.terminalHistory);
    let newHistory: TerminalHistoryLog[] = state.terminalHistory;
    let newRequest: TerminalHistoryLog;
    let storageResp;
    const {type, payload} = {...action};
    let commandType = type;
    commandType = commandType.toLowerCase();
    console.log("inputReducer will push into state - ",state.terminalHistory);

    switch (commandType) {
      case CommandType.SET:
        if (!payload.value){
          newRequest = {req: `${type} ${payload.key} ${payload.value}`, res: "ERROR - provide the value"};
        }else{
          console.log("CommandType.SET - ",state.terminalHistory);
          localStorage.setItem(payload.key, payload.value);
          newRequest = {req: `${type} ${payload.key} ${payload.value}`, res: "OK"};
        } 
        console.log("state before push -",state.terminalHistory);
        newHistory.push(newRequest);
        console.log("state after push -",state.terminalHistory);

        return {
          terminalHistory: newHistory
        }
      case CommandType.GET:
        if (!payload.key){
          newRequest = {req: `${type} ${payload.key} ${payload.value}`, res: "ERROR - provide the key"};
        }else{
          storageResp = localStorage.getItem(payload.key);
          if(storageResp){
            newRequest = {req: `${type} ${payload.key} ${payload.value}`, res: storageResp};
          }else{
            newRequest = {req: `${type} ${payload.key} ${payload.value}`, res: "NOT FOUND"};
          }
        }
        newHistory.push(newRequest);
        return {
          terminalHistory: newHistory
        }
      case CommandType.DELETE:
        if (!payload.key){
          newRequest = {req: `${type} ${payload.key} ${payload.value}`, res: "ERROR - provide the key"};
        }else{
          localStorage.removeItem(payload.key);
          newRequest = {req: `${type} ${payload.key} ${payload.value}`, res: "OK"};
        }
        newHistory.push(newRequest);
        return {
          terminalHistory: newHistory
        }
      default: 
        newRequest = {req: `${type} ${payload.key} ${payload.value}`, res: "NOT VALID COMMAND"};
        newHistory.push(newRequest);
        return {
          terminalHistory: newHistory
        }
    }
  }