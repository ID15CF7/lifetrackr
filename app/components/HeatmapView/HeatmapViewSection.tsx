"use client";
import React, { useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import LifeDomainItem from '../LifeDomains/LifeDomainItem';
import images from '../../../utils/importImages';

const lifeDomains = [
  { domain: "Mental", color: 'bg-[#005ac3]', image: images["Mental.png"] },
  { domain: "Physical", color: 'bg-[#168a00]', image: images["Physical.png"] },
  { domain: "Finance", color: 'bg-[#B38A00]', image: images["Finance.png"] },
  { domain: "Career", color: 'bg-[#6199FF]', image: images["Career.png"]},
  { domain: "Family", color: 'bg-[#DF6900]', image: images["Family.png"]},
  { domain: "Friends", color: 'bg-[#0381aa]', image: images["Friends.png"] },
  { domain: "Leisure", color: 'bg-[#7000D8]', image: images["Leisure.png"] },
  { domain: "Growth", color: 'bg-[#006eac]', image: images["Growth.png"] },
  { domain: "Spirituality", color: 'bg-[#364391]', image: images["Spirituality.png"] },
];

interface Task {
  domain: string;
  name: string;
  description: string;
  date: string;
  activities: { date: string; count: number }[];
}

const HeatmapViewSection = () => {
  const [selectedDomain, setSelectedDomain] = useState(lifeDomains[0].domain);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDomain(e.target.value);
  };

  const handleAddTask = () => {
    setShowTaskDetails(true);
  };

  const handleSaveTask = () => {
    if (taskName.trim() && taskDescription.trim()) {
      const newTask = {
        domain: selectedDomain,
        name: taskName,
        description: taskDescription,
        date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
        activities: [{ date: new Date().toISOString().split('T')[0], count: 1 }]
      };
      setTasks([...tasks, newTask]);
      setTaskName('');
      setTaskDescription('');
      setShowTaskDetails(false);
      console.log('Task added:', newTask);
    }
  };

  const handleAddActivity = (taskIndex: number) => {
    const newTasks = [...tasks];
    const today = new Date().toISOString().split('T')[0];
    const activityIndex = newTasks[taskIndex].activities.findIndex(activity => activity.date === today);
    if (activityIndex > -1) {
      newTasks[taskIndex].activities[activityIndex].count += 1;
    } else {
      newTasks[taskIndex].activities.push({ date: today, count: 1 });
    }
    setTasks(newTasks);
    console.log('Activity added to task:', newTasks[taskIndex]);
  };

  const getTasksForDomain = (domain: string) => {
    return tasks.filter(task => task.domain === domain);
  };

  return (
    <section className="flex flex-col items-center mx-auto w-full max-w-5xl my-10">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-row items-center gap-4">
          <select 
            value={selectedDomain} 
            onChange={handleDomainChange} 
            className="p-2 border border-gray-300 rounded"
          >
            {lifeDomains.map((domain, index) => (
              <option key={index} value={domain.domain}>{domain.domain}</option>
            ))}
          </select>
          <button className='btn p-2 bg-blue-500 text-white rounded' onClick={handleAddTask}>Add Task</button>
        </div>
        {showTaskDetails && (
          <div className="flex flex-col items-center gap-4 mt-4">
            <input 
              type="text" 
              value={taskName} 
              onChange={(e) => setTaskName(e.target.value)} 
              placeholder="Enter task name" 
              className="p-2 border border-gray-300 rounded"
            />
            <textarea 
              value={taskDescription} 
              onChange={(e) => setTaskDescription(e.target.value)} 
              placeholder="Enter short description" 
              className="p-2 border border-gray-300 rounded"
            />
            <button className='btn p-2 bg-green-500 text-white rounded' onClick={handleSaveTask}>Save</button>
          </div>
        )}
      </div>
      <div className="mt-4 w-full">
        {lifeDomains.map((domain, index) => {
          const domainTasks = getTasksForDomain(domain.domain);
          return domainTasks.length > 0 ? (
            <LifeDomainItem
              key={index}
              domain={domain.domain}
              image={domain.image}
              bubbleClass={domain.color}
              taskCount={domainTasks.length}
              tasks={domainTasks}
              handleAddActivity={handleAddActivity}
            />
          ) : null;
        })}
      </div>
    </section>
  );
};

export default HeatmapViewSection;