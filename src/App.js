import "./styles.scss";
import Heading from "../src/Heading";
import MyList from "../src/List";

export default function App() {
  return (
    <div className="App">
      <Heading name="David" />
      <MyList />
    </div>
  );
}
