import { useState } from "react";

interface InputHookReturn {
  value: string,
  setValue: (par:any)=> any,
  reset: ()=> any,
  bind: Bind
}

interface Bind {
  value: string,
  onChange: (event: any) => void
}

export function useInput(initialValue:string) :InputHookReturn{
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event:any) => {
        setValue(event.target.value);
      }
    }
  };
};