import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

interface TabTwoProps {
  tabStyle: string;
}

const aboutMeSkills = [
  {
    id: 0,
    title: 'Main Skills',
    skills: [
      { id: 0, title: 'FullStack Development', optional: 'MEAN, MERN, LAMP, .Netcore', tag: 'Web' },
      { id: 1, title: 'FrontEnd Development', optional: 'HTML, CSS, JS, Angular, ReacJS', tag: 'Web' },
      { id: 2, title: 'Mobile Development', optional: 'Flutter, IonicFramework, Swift, Kotlin-Java', tag: 'Mobile' },
      { id: 3, title: 'Backend Development', optional: 'NestJS, Laravel, .NetCore', tag: 'Backend' },
      { id: 4, title: 'Database Newbie', optional: 'MongoDB, MySQL, MSSQL', tag: 'Databases' },
      { id: 5, title: 'User Interface/Experience', optional: 'Photoshop, Sketch, Adobe XD, Figma, UI8.net', tag: 'UI/UX' }
    ]
  },
  {
    id: 1,
    title: 'Experience',
    skills: [
      { id: 0, title: 'Sr. FrontEnd Developer', optional: '2019 - Current', tag: 'Finance' },
      { id: 1, title: 'Software Developer', optional: '2017 - 2019', tag: 'Finance' },
      { id: 2, title: 'Freelancer', optional: '2013 - Present', tag: 'Web/Mobile' }
    ]
  },
];

const TabTwo = ({ tabStyle }: TabTwoProps) => {

  return (
    <div>
      {/* Start Tabs Area */}
      <div className="tabs-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Tabs>
                <TabList className={`${tabStyle}`}>
                  {aboutMeSkills.map((tab, i) => (
                    <Tab key={i}>{tab.title}</Tab>
                  ))}
                </TabList>
                {aboutMeSkills.map((list, i) => (
                  <TabPanel key={i}>
                    <div className="single-tab-content">
                      <ul>
                        {list.skills.map((skill, j) => (
                          <li key={j}><a href="#service">{skill.title} <span> - {skill.tag}</span></a>{skill.optional}</li>))}
                      </ul>
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* End Tabs Area */}
    </div>
  );
}
export default TabTwo;
