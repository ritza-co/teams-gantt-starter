/**
 * Application configuration
 */
import { GanttConfig, ProjectModel } from '@bryntum/gantt';

const project = new ProjectModel({
  taskStore: {
    autoTree: true,
    transformFlatData: true,
  },
  // specify data source
  transport: {
    load: {
      requestConfig: {
        url: 'http://localhost:8010/api/user/data',
        // headers to fix cors issue, no wildcard '*' allowed
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:8010',
        },
      },
      sync: {
        url: 'http://localhost:53000/user/api',
      },
    },
  },
  autoLoad: true,
  autoSync: true,
  validateResponse: true,
});

const ganttConfig: Partial<GanttConfig> = {
  width: '100vw', // = 800px
  height: '100vh',
  listeners: {},
  columns: [{ type: 'name', field: 'name', width: 250 }],
  viewPreset: 'weekAndDayLetter',
  barMargin: 10,

  project: {
    taskStore: {
      autoTree: true,
      transformFlatData: true,
    },
    // specify data source
    transport: {
      load: {
        url: 'http://localhost:8010/api/user/data',
      },
      sync: {
        url: 'http://localhost:8010/api/user/api',
      },
    },
    autoLoad: true,
    autoSync: true,
    validateResponse: true,
  },
};

export { ganttConfig };
