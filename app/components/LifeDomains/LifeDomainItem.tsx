"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

interface Task {
  domain: string;
  name: string;
  description: string;
  date: string;
  activities: { date: string; count: number }[];
}

interface LifeDomainItemProps {
  domain: string;
  image: string;
  bubbleClass: string;
  taskCount: number;
  tasks: Task[];
  handleAddActivity: (taskIndex: number) => void;
}

const LifeDomainItem: React.FC<LifeDomainItemProps> = ({ domain, image, bubbleClass, taskCount, tasks, handleAddActivity }) => {
  const [count, setCount] = useState(taskCount);

  useEffect(() => {
    setCount(taskCount);
    console.log(`Task count for ${domain} updated to:`, taskCount);
  }, [taskCount]);

  return (
    <div className="life-domain-item mb-4">
      <div className="flex flex-col items-center">
        <div className="relative">
          <Image src={image} alt={domain} width={100} height={100} />
          {count > 0 && (
            <div className={`absolute top-0 right-0 text-white rounded-full w-6 h-6 flex items-center justify-center ${bubbleClass}`}>
              {count}
            </div>
          )}
        </div>
        <h3 className="mt-2 font-bold text-center">{domain}</h3>
      </div>
      <div className="mt-4">
        {tasks && tasks.map((task, index) => (
          <div key={index} className="p-2 border border-gray-300 rounded mb-2">
            <h4 className="font-bold">{task.name}</h4>
            <p>{task.description}</p>
            <p className="text-sm text-gray-500">{task.date}</p>
            <div className="flex justify-end">
              <button className='btn p-4 bg-yellow-500 text-white rounded mb-4 text-2xl' onClick={() => handleAddActivity(index)}>+</button>
            </div>
            <CalendarHeatmap
              startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
              endDate={new Date()}
              values={task.activities}
              classForValue={(value) => {
                if (!value) {
                  return 'fill-gray-200';
                }
                if (value.count >= 4) {
                  return 'fill-green-900';
                } else if (value.count >= 3) {
                  return 'fill-green-700';
                } else if (value.count >= 2) {
                  return 'fill-green-500';
                } else {
                  return 'fill-green-300';
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeDomainItem;