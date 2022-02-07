const DOM = () => {
  const array = [1, 5, 9, 13, 17, 21, 25];
  const object = [
    { brand: "Mercedes", topspeed: "256" },
    { brand: "BMW", topspeed: "211" },
    { brand: "Porsche", topspeed: "302" },
  ];

  const functionOne = () => {console.log("first")}
  const functionTwo = () => {console.log("second")}

  functionOne(functionTwo)

  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Callback: </div>
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

export default DOM;
