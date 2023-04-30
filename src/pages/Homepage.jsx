import React from "react";

import CreateTask from "../components/CreateTask";
import TasksList from "../components/TasksList";

const Homepage = () => {
  return (
    <div className="homepage">
      <CreateTask />
      <TasksList />
    </div>
  );
};

export default Homepage;
