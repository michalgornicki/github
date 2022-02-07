const Lifecycle = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Phases of component lifecycle: </div>
        <div className="text-color">
          {`Mounting - inserting elements into the DOM.`} <br />
          {`Updating - updating components in the DOM.`} <br />
          {`Unmounting - removing a component from the DOM.`}{" "} <br />
          (In components we can declare this specific methods that will execute code in selected phase of component lifecycle.)
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
        <div className="">componentDidMount() </div>
        <div className="text-color">
          {`This method executes after rendering of component.`} <br />
        </div>{" "}
      </div>
    </div>
  );
};

export default Lifecycle;
