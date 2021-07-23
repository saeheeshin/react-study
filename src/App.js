import "./styles.scss";
import Header from "./component/Header";
import Note from "./component/Note";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}
