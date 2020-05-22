import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

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

      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/students/new" component={StudentsNew} isPrivate />
      <Route path="/students/edit/:id" component={StudentsEdit} isPrivate />

      <Route path="/plans" exact component={Plans} isPrivate />
      <Route path="/plans/new" component={PlansNew} isPrivate />
      <Route path="/plans/edit/:id" component={PlansEdit} isPrivate />

      <Route path="/registrations" component={Registrations} isPrivate />
      <Route path="/registrations/new" component={RegistrationsNew} isPrivate />
      <Route
        path="/registrations/edit/:id"
        component={RegistrationsEdit}
        isPrivate
      />

      <Route path="/help-orders" component={HelpOrders} isPrivate />
    </Switch>
  );
}
