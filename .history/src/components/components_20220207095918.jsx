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
      </div>
      <div className="js-item">
        {" "}
        <div className="">Class component: </div>
        <div className="text-color">
          {`function Welcome() {`} <br />
          {`return`} <br />
          {`<div>Hello!</div>;`} <br/>
          {`}`}{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Components;
