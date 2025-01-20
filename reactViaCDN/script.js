// Composant fonction
// function App() {
//   return (
//     <div>
//       <h2 className="titre">Salut</h2>
//     </div>
//   );
// }

// Arrow fonction
const App = () => {
  return (
    <div>
      <h2 className="titre">Salut</h2>
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2 className="titre">Salut</h2>
//       </div>
//     );
//   }
// }

// React.createElement("div", null, React.createElement("h2", { className: "titre" }, "Salut"));

// // Configuration versions antérieur à React 18
// const container = documnent.getElementById("app");
// ReactDOM.render(<App />, container);

// Configuration React 18
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
