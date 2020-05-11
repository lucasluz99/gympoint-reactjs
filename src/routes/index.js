import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from '../pages/Signin';

import Students from '../pages/Students';
import StudentsNew from '../pages/StudentnsNew';
import StudentsEdit from '../pages/StudentsEdit';

import Plans from '../pages/Plans';
import PlansNew from '../pages/PlansNew';
import PlansEdit from '../pages/PlansEdit';

import Registrations from '../pages/Registrations';
import RegistrationsNew from '../pages/RegistrationsNew';
import RegistrationsEdit from '../pages/RegistrationsEdit';

import HelpOrders from '../pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />

      <Route path="/dashboard" component={Students} />
      <Route path="/students/new" component={StudentsNew} />
      <Route path="/students/edit" component={StudentsEdit} />

      <Route path="/plans" component={Plans} />
      <Route path="/plans/new" component={PlansNew} />
      <Route path="/plans/edit" component={PlansEdit} />

      <Route path="/registrations" component={Registrations} />
      <Route path="/registrations/new" component={RegistrationsNew} />
      <Route path="/registrations/edit" component={RegistrationsEdit} />

      <Route path="/help-orders" component={HelpOrders} />
    </Switch>
  );
}
