import { Providers, ProviderState } from '@microsoft/mgt-element';
import { TeamsFxProvider } from '@microsoft/mgt-teamsfx-provider';
import { useGraph } from '@microsoft/teamsfx-react';
import React, { useState, useContext, useEffect } from 'react';
import { TeamsFxContext } from './Context';
import Gantt from '../components/Gantt';

export default function AcmeGantt() {
  const [role, setRole] = useState(0);
  const { teamsfx } = useContext(TeamsFxContext);

  const dataGraph = useGraph(
    async (graph, teamsfx, scope) => {
      // Call graph api directly to get user profile information
      const profile = await graph.api('/me').get();

      // Initialize Graph Toolkit TeamsFx provider
      const provider = new TeamsFxProvider(teamsfx, scope);
      Providers.globalProvider = provider;
      Providers.globalProvider.setState(ProviderState.SignedIn);

      return { profile };
    },
    { scope: ['User.Read'], teamsfx: teamsfx }
  );

  useEffect(() => {
    dataGraph.reload();
  }, []);

  useEffect(() => {
    let managerRole = 0;
    if (dataGraph.data) {
      if (dataGraph.data?.profile.jobTitle === 'Manager') {
        managerRole = 1;
      }
      setRole(managerRole);
    }
  }, [dataGraph.data, setRole]);

  return (
    <div>
      <Gantt role={role} />
    </div>
  );
}
