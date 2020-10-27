import React from "react";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";

import "./scss/app.scss";

function App() {


  
  

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

// class App extends React.Component {
//   componentDidMount() {
//     axios.get("http://localhost:3000/db.json").then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route
//             path="/"
//             render={() => <Home items={this.props.items} />}
//             exact
//           />
//           <Route path="/cart" component={Cart} exact />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
// export default connect(
//   (state) => {
//     return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };},
//   (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items)),
//     };
//   }
// )(App);
