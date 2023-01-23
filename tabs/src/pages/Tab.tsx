import React, { useContext } from 'react';
import { TeamsFxContext } from '../components/Context';

export default function Tab() {
  const { themeString } = useContext(TeamsFxContext);
  return (
    <div className={themeString === 'default' ? '' : 'dark'}>
      {/* <Your app name here /> */}
    </div>
  );
}
