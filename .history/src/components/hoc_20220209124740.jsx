const HOC = () => {
  document.addEventListener("DOMContentLoaded", function () {

    console.log(document.getElementsByClassName("body")[0].getBoundingClientRect())
  });

  return (
    <div className="">
      <div className="js-item">
        {" "}
        <div className="">High Order Components: </div>
        <div className="text-color">
        <pre>{`
const EnhancedComponent = higherOrderComponent(WrappedComponent);


const hoc = (WrappedComponent) => (props) => {
  return (
    <div>
      <WrappedComponent {...props}>
        {props.children.toUpperCase()}
      </WrappedComponent>
    </div>
  )
}

const Username = (props) => (
  <div>{props.children}</div>
)

const UpperCaseUsername = hoc(Username)

const App = () => (
  <div>
    <UpperCaseUsername>Kingsley</UpperCaseUsername>
  </div>
);

        `}
        </pre>
        </div>{" "}
        High Order Component get.
      </div>
    </div>
  );
};

export default HOC;
