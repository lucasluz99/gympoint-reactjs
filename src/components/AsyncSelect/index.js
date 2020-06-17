import React, { useState } from 'react';

import Async from 'react-select/async';

function AsyncSelect({ options, loadOptions, name }) {
  return <Async loadOptions={() => {}} />;
}

export default AsyncSelect;
