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
          (In components we can declare specific methods that will execute)
        </div>{" "}
       
      </div>
    </div>
  );
};

export default Lifecycle;
