import {StateType, ActionType, TerminalHistoryLog} from './TerminalController'

export enum CommandType {
    SET = 'set',
    GET = 'get',
    DELETE = 'del'
}
  
export function inputReducer(state: StateType, action: ActionType) : StateType{
    let newHistory: TerminalHistoryLog[] = state.terminalHistory;
    let newRequest: TerminalHistoryLog;
    let storageResp;
    const {type, payload} = {...action};
    let commandType = type;
    commandType = commandType.toLowerCase();

    switch (commandType) {
      case CommandType.SET:
        if (!payload.value){
          newRequest = {req: `${type} ${payload.key} ${payload.value}`, res: "ERROR - provide the value"};
        }else{
          localStorage.setItem(payload.key, payload.value);
          newRequest = {req: `${type} ${payload.key} ${payload.value}`, res: "OK"};
        } 
        newHistory.push(newRequest);
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