import React, { useEffect, useState } from "react";
import Content from "./Content";
import EmployeeList from "./Employee";
import Header from "./Header";

function Main() {
  const [team, setTeam] = useState("Team-A");
  const [employee, setEmployee] = useState([
    {
      userName: "Frontend",
      jobTitleName: "Frontend Developer",
      employeeCode: "E1",
      techstack: ["React", "javascript", "html", "css"],
      emailAddress: "fe@gmail.com",
      teamName: "Team-B",
      image:
        "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
    },
    {
      userName: "Frontend",
      jobTitleName: "Frontend Developer",
      employeeCode: "E1",
      techstack: ["React", "javascript", "html", "css"],
      emailAddress: "fe@gmail.com",
      teamName: "Team-B",
      image:
        "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
    },
    {
      userName: "Backend",
      jobTitleName: "Backend Developer",
      employeeCode: "E2",
      techstack: ["React", "Node", "php"],
      emailAddress: "be@gmail.com",
      teamName: "Team-A",
      image:
        "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
    },
    {
      userName: "Fullstack",
      jobTitleName: "Developer",
      employeeCode: "E3",
      techstack: ["React", "javascript", "node", "php", "html", "css"],
      emailAddress: "fs@gmail.com",
      teamName: "Team-B",
      image:
        "https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg",
    },
    {
      userName: "Frontend",
      jobTitleName: "Frontend Developer",
      employeeCode: "E4",
      techstack: ["React", "javascript", "html", "css"],
      emailAddress: "fe@gmail.com",
      teamName: "Team-A",
      image:
        "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
    },
    {
      userName: "Backend",
      jobTitleName: "Backend Developer",
      employeeCode: "E5",
      techstack: ["React", "Node", "php"],
      emailAddress: "be@gmail.com",
      teamName: "Team-B",
      image:
        "https://s3.studytonight.com/curious/uploads/pictures/1631204081-106730.png",
    },
    {
      userName: "Fullstack",
      jobTitleName: "Developer",
      employeeCode: "E6",
      techstack: ["React", "javascript", "node", "php", "html", "css"],
      emailAddress: "fs@gmail.com",
      teamName: "Team-A",
      image:
        "https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify);
  }, [employee]);
  const changeHandler = (e) => {
    setTeam(e.target.value);
  };
  const handleClick = (index) => {
    const updatedEmployees = [...employee];
    if (index >= 0 && index < updatedEmployees.length) {
      if (updatedEmployees[index]) {
        updatedEmployees[index] = {
          ...updatedEmployees[index],
          teamName: updatedEmployees[index].teamName === team ? "" : team,
        };
        setEmployee(updatedEmployees);
      } else {
        console.error(
          "Object at index",
          index,
          "does not exist in the employee array"
        );
      }
    }
  };

  return (
    <div>
      <Header changeHandler={changeHandler} />
      <Content />
      {employee.length > 0 && (
        <EmployeeList
          employee={employee}
          team={team}
          changeHandler={changeHandler}
          handleClick={handleClick}
          MemberCount={employee.filter((a) => a.teamName === team).length}
          
        />
      )}
    </div>
  );
}

export default Main;
