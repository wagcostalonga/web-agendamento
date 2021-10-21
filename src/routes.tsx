import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Landing from "@pages/Landing";
import IdentifiqueSe from "@pages/IdentifiqueSe";

import "./styles/animation.css";

const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route exact path="/" component={Landing} />
          <Route path="/identifiquese" component={IdentifiqueSe} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;
