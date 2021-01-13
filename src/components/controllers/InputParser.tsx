import {CommandPayload, ActionType} from './TerminalController';

export function inputParser(input: string): ActionType{
    let inpCmnd = "";
    let parsedPayload = {key: "", value: ""};

    if (input){
        const arrStrings: string[] = input.split(' ');
        console.log("arrStrings: ",arrStrings);
        inpCmnd = arrStrings[0];
        if (arrStrings.length>1){
            arrStrings.shift();
            parsedPayload = payloadParser(arrStrings);
        }
    }

    return {type: inpCmnd, payload: parsedPayload}
}  

//TODO: support for more args
function payloadParser(payload: string[]): CommandPayload{
    const payloadKey = payload[0];
    let payloadValue = ""; 

    if (payload.length>1){
        payloadValue = payload[1];
        console.log("payloadKey: ",payloadKey);
        console.log("payloadValue: ",payloadValue);
    }
  
    return {key: payloadKey, value: payloadValue}
}