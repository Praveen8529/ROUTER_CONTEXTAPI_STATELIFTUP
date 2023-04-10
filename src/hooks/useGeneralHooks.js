const useIsFirstRender = () => {
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current = false;
  }, []);
  return firstRender.current;
};

const usePrevious = (value) => {
  const prevVal = useRef(undefined);
  useEffect(() => {
    prevVal.current = value;
  }, [value]);
  return prevVal.current;
};

const useTimeout = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (event) => savedCallback.current(event);
    const id = setTimeout(handler, delay);
    return () => clearTimeout(id);
  }, [delay]);
};

const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = () => setHovered(true);
  const handleMouseOut = () => setHovered(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, hovered];
};

const useArray = (initialArray = []) => {
  const [array, setArray] = useState(initialArray);
  const push = (item) => {
    setArray([...array, item]);
  };
  const removeByIndex = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };
  const clenArray = () => {
    setArray([]);
  };

  return { array, push, removeByIndex, clenArray };
};

const useIsMounted = (boolean) => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const getMountStatus = () => isMounted.current;

  return getMountStatus;
};
