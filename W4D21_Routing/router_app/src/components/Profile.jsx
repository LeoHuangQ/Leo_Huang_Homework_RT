import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Profile = () => {
  const {id} = useParams();
  const query = new URLSearchParams(useLocation().search);
  console.log(useParams(), useLocation().search);

  return (
    <h1>Profile: {id} Query: {query.get('aa')} and {query.get('bb')}</h1>
  )
}

export default Profile