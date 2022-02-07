const Components = () => {
  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">Functional component: </div>
        <div className="text-color">
          {`function Welcome() {`} <br />
          {`return`} <br />
          {`<div>Hello!</div>;`} <br/>
          {`}`}{" "}
        </div>{" "}
        (Function takes another function as parameter, which is executed asynchronously, only after execution of primary function)
      </div>
    </div>
  );
};

export default Components;
