import React from 'react';
import { Load } from './LoadingSt';

import Animation from '../Loading/Logoo.gif';

export default function Loading() {
  return (
    <Load>
      <img src={Animation} />
    </Load>
  )
}