const Hooks = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">useState: </div>
        <div className="text-color">
          {`const functionOne = () => {code}`} <br />
          {`const functionTwo = (callback) => {code; callback();}`} <br />
          {`functionTwo(functionOne)`}{" "}
        </div>{" "}
        (Function takes another function as parameter, which is executed asynchronously, only after execution of primary function)
      </div>
    </div>
  );
};

export default Hooks;
