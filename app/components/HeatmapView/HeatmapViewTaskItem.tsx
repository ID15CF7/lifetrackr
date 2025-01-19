import React from 'react';

interface HeatmapViewTaskItemProps {
  task: string;
  domain: string;
  name: string;
  description: string;
}

const HeatmapViewTaskItem: React.FC<HeatmapViewTaskItemProps> = ({ domain, name, description }) => {
  return (
    <li>
      <strong>Task:</strong> {name} <br />
      <strong>Domain:</strong> {domain} <br />
      <strong>Description:</strong> {description}
    </li>
  );
};

export default HeatmapViewTaskItem;