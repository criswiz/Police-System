import React, { useState } from 'react';
import '../index.css';
import UpdateUserDetails from './UpdateUserDetails';
import AllComplaints  from "./AllComplaints";
import AddUser from "./AddUser";
import Complaints from '../pages/Complaints';
import GoalItem from './GoalItem';

function Tabs() {
  const [currentTab, setCurrentTab] = useState('1');
  const tabs = [
    {
      id: 1,
      tabTitle: 'File Complaint',
      title: 'Complaints',
      content: <Complaints />,
    },
    {
      id: 2,
      tabTitle: 'Update User Information',
      title: 'User Details',
      content: <GoalItem />,
    },
    {
      id: 3,
      tabTitle: 'Add User',
      title: 'User Details',
      content: <GoalItem />,
    },
    {
      id: 4,
      tabTitle: 'Complaints',
      title: 'User Complaints',
      content: <GoalItem />,
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="container-tabs">
      <div className="tabs">
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div>
                <p className="title">{tab.title}</p>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
