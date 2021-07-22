import "./styles.scss";

export default function App() {
  const fName = "david";
  const lName = "shin";
  const copyrightDate = new Date().getFullYear();

  return (
    <div className="App">
      <h1>
        Created By: {fName} {lName}
      </h1>
      <p>Copyright: {copyrightDate}</p>
    </div>
  );
}
