import image1 from "./welcome/assets/image1.jpg";
import image2 from "./welcome/assets/image2.jpg";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <h1>Multi Highlight Extension installed</h1>
        <p className="description">
          Click the puzzle piece (1) in the top right of your browser. Then,
          click the little pin (2) next to the extension:
        </p>
        <img src={image1} height="auto" width="100%" alt="add extension" />
        <p className="description">
          Open the extension (3) on any page to start using Multi Highlight
          Extension:
        </p>
        <img src={image2} height="auto" width="100%" alt="start using" />
      </div>
    </div>
  );
}

export default App;
