import React, { useEffect, useRef, useState } from "react";
import useMultipleEventHandlers from "../hooks/useMultipleEventHandlers";

const MultipleEventHandlers = () => {
  const myButtonRef = useRef();
  const [data, setData] = useState([]);
  useEffect(() => {
    const handleClick = () => {
      setData([...data, "Button clicked!"]);
    };

    const handleMouseEnter = () => {
      setData([...data, "Mouse entered button!"]);
    };

    const handleMouseLeave = () => {
      setData([...data, "Mouse left button!"]);
    };

    useMultipleEventHandlers(myButtonRef.current, {
      click: handleClick,
      mouseenter: handleMouseEnter,
      mouseleave: handleMouseLeave,
    });
  }, []);
  return (
    <>
      <button ref={myButtonRef} className="clickMe">
        Click me!
      </button>
      <ul>{data && data.map((x, i) => <li key={i}>{x}</li>)}</ul>
    </>
  );
};

export default MultipleEventHandlers;
