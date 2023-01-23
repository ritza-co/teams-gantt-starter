import React, { useContext } from 'react';
import { TeamsFxContext } from '../components/Context';
import AcmeGantt from '../components/AcmeGantt';

export default function Tab() {
  const { themeString } = useContext(TeamsFxContext);
  return (
    <div className={themeString === 'default' ? '' : 'dark'}>
      <AcmeGantt />
    </div>
  );
}
