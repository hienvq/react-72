import "./App.css";
import RenderProps from "./components/RenderProps";
function App() {
  return (
    <>
      <RenderProps
        callbackFn={(data: any) => (
          <h1>
            Hello {data.x} - {data.y}
          </h1>
        )}
      />
      <RenderProps
        callbackFn={(data: any) => (
          <h3>
            Hello {data.x} - {data.y}
          </h3>
        )}
      />
    </>
  );
}

export default App;
