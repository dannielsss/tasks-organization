import React from 'react';
import { ErrorMessageBox } from './ErrorMessageElements';

function ErrorMessage({ error }) {
  return <ErrorMessageBox>{error}</ErrorMessageBox>;
}

export default ErrorMessage;
