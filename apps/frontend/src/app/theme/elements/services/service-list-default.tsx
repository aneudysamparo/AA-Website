import React, { Component } from "react";
import { FiCast, FiLayers, FiServer, FiUsers, FiMonitor, FiSmartphone } from "react-icons/fi";

export interface ServiceListProps {
  column: string;
  items: number;
}

const ServiceList = [
  {
    icon: <FiMonitor />,
    title: 'Website Development',
    description: 'As a full-stack web developer, I deliver a wide range of custom web solutions for small businesses and entrepreneurs helping brands jump to digital landscape.'
  },
  {
    icon: <FiSmartphone />,
    title: 'Mobile App Development',
    description: 'I provide iOS and Android mobile application development services so you can reach your customers on their favorite mobile devices.'
  },
  {
    icon: <FiServer />,
    title: 'Backend Development',
    description: 'I offer backend programming services to my customers. I can develop all types of applications using the top of frameworks and languages according to the customer’s requirements.'
  }
];

const ServiceListDefault = ({ column, items }: ServiceListProps) => {
  return (
    <React.Fragment>
      <div className="row">
        {ServiceList.map((val, i) => (
          <div className={`${column}`} key={i}>
            <a href="#service">
              <div className="service service__style--2">
                <div className="icon">
                  {val.icon}
                </div>
                <div className="content">
                  <h3 className="title">{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ServiceListDefault;

