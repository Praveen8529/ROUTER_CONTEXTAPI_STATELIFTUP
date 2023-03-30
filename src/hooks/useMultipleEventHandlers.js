import { useEffect, useRef } from "react";

function useMultipleEventHandlers(element,handlers)
{
    Object.keys(handlers).forEach((eventName)=>{
        element.addEventListener(eventName,handlers[eventName]);
    });
    return ()=>{
          Object.keys(handlers).forEach((eventName)=>{
        element.removeEventListener(eventName,handlers[eventName]);
    })}
}
export default useMultipleEventHandlers;