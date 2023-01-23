/**
 * Application configuration
 */
import { GanttConfig, ProjectModel } from '@bryntum/gantt';

// create project which loads data from a URL
const project = new ProjectModel({
  taskStore: {
    autoTree: true,
    transformFlatData: true,
  },
  // specify data source
  transport: {
    load: {
      url: 'http://localhost:8010/data',
    },
    sync: {
      url: 'http://localhost:8010/api',
    },
  },
  autoLoad: true,
  autoSync: true,
  validateResponse: true,
});

const ganttConfig: Partial<GanttConfig> = {
  width: '100vw',
  height: '100vh',
  dependencyIdField: 'sequenceNumber',
  columns: [{ type: 'name', width: 250, text: 'Tasks' }],
  viewPreset: 'weekAndDayLetter',
  barMargin: 10,
  project,
};

// ganttConfig.readOnly = true;

project.load();

export { ganttConfig };
