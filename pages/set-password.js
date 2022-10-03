
import React from 'react';
import ResetPassword from 'views/SetNewPassword';
import Minimal from 'layouts/Minimal';
import WithLayout from 'WithLayout';

const ResetPasswordCoverPage = () => {
  return (
    <WithLayout
      component={ResetPassword}
      layout={Minimal}
    />
  )
};

export default ResetPasswordCoverPage;
