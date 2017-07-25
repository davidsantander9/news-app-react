import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import Home  from './containers/Home'
import Articles from './containers/Articles'

export default function Routes() {
  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/articles/:sources_id" component={ Articles}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
