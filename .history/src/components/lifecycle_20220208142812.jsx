const Lifecycle = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Phases of component lifecycle: </div>
        <div className="text-color">
    
        <pre>{`
          Mounting - inserting elements into the DOM.
          Updating - updating components in the DOM.
          Unmounting - removing a component from the DOM.
      
          `}</pre>

        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">componentDidMount() </div>
        <div className="text-color">
          {`This method executes after rendering of component.`} <br />
        </div>{" "}
      </div>
      <div className="js-item">
        {" "}
        <div className="">componentWillUnmount() </div>
        <div className="text-color">
          {`This method executes after removing component from DOM.`} <br />
        </div>{" "}
      </div>
    </div>
  );
};

export default Lifecycle;
