import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops! Error 404</h1>
      <p>The page you are looking for does not exist.</p>
      <p>{error.status}: <i>{error.statusText || error.message}</i></p>
    </div>
  )
}

export default Error