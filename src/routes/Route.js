import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/Default';
import LoginLayout from '../pages/_layouts/Login';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = useSelector((state) => state.auth.signed);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : LoginLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
