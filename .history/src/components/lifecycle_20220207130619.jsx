const Lifecycle = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Phases of component lifecycle: </div>
        <div className="text-color">
          {`Mounting - putting inserting elements into the DOM.`} <br />
          {`Updating - refers to methods for updating components in the DOM.`} <br />
          {`Unmounting, that is removing a component from the DOM.
`}{" "}
        </div>{" "}
        (Function takes another function as parameter, which is executed asynchronously, only after execution of primary function)
      </div>
    </div>
  );
};

export default Lifecycle;
