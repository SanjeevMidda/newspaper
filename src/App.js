import "./index.css";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      <div className="containerOne">
        <h1>
          London is the <Text text="capital" /> of the United Kingdom{" "}
          <Text text="and" /> home to the <Text text="British" /> monarchy.
          Buckingham Palace, <Text text="located" /> in the heart of the city,
          serves <Text text="as" /> the official residence of the reigning
          monarch. Many <Text text="attractions" /> here.
        </h1>
      </div>
      <div className="containerTwo">
        <h1>
          <Text text="Seoul" /> has a history spanning more than 2,000{" "}
          <Text text="years" />, and its historical landmarks and cultural
          heritage sites <Text text="showcase" /> this deep-rooted past.{" "}
          <Text text="places " />
          like Gyeongbokgung Palace, <Text text="Changdeokgung" /> Palace.
        </h1>
      </div>
    </div>
  );
}

export default App;
