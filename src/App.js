import "./App.css";
import "font-awesome/css/font-awesome.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Register from "./components/register";
import NewUser from "./components/newUser";
import ListofUsers from "./components/listofusr";
import AddNewUser from "./components/addnewusr";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/register" exact component={Register} />
          <Route path="/register/newUser" exact component={NewUser} />
          <Route
            path="/register/newUser/addNewUser"
            exact
            component={AddNewUser}
          />
          <Route
            path="/register/newUser/listofUsers"
            exact
            component={ListofUsers}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
