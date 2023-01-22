import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import ReturnDogRoutes from "./ReturnDogNameRoutes";

const Routes = () => {

    return (
    <Switch>
        <Route exact path="/dogs" >
            <DogList />
            {/* // what props will this need? */}
        </Route>
        <Route path="/dogs/:name" >
            <ReturnDogRoutes />
        </Route>
        <Redirect to="/dogs" />
    </Switch>
    )

}

export default Routes;