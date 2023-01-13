/**
 * Main Application script
 */
import React, { FunctionComponent, useRef } from 'react';
import { BryntumGantt } from '@bryntum/gantt-react';
import { ganttConfig } from './GanttConfig';
import './App.scss';

const Gantt: FunctionComponent = () => {
  const gantt = useRef<BryntumGantt>(null);

  return <BryntumGantt ref={gantt} {...ganttConfig} />;
};

// If you plan to use stateful React collections for data binding please check this guide
// https://bryntum.com/products/gantt/docs/guide/Gantt/integration/react/data-binding

export default Gantt;
