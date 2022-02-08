const Hooks = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">useState: </div>
        <div className="text-color">
          <pre>{`
          const [myState, setMyState] = useState(initialState) 
          setMyState(newState) //Setting new state 
          `}</pre>
        </div>{" "}
        (Function takes another function as parameter, which is executed asynchronously, only after execution of primary function)
      </div>
      <div className="js-item">
        {" "}
        <div className="">useEffect: </div>
        <div className="text-color">
          <pre>{`
            useEffect(didUpdate);
            var bar = ${"bar"};
          `}</pre>
        </div>{" "}
        (Function takes another function as parameter, which is executed asynchronously, only after execution of primary function)
      </div>
    </div>
  );
};

export default Hooks;
