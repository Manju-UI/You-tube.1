import React from "react";

function EmployeeList({ team, handleClick, changeHandler, employee ,MemberCount}) {
  console.log('kkkkkk', MemberCount)

  return (
    <div>
      <div className="container">
        <div className="row ">
          <div>
            <h1>Team Allocation</h1>
            <h3>{team} has {MemberCount} members.</h3>
          </div>
          <div className="col ">
            <select
              className="form-select form-select-lg"
              value={team}
              onChange={changeHandler}
              onClick={handleClick}
            >
              <option value="Team-A">Team-A</option>
              <option value="Team-B">Team-B</option>
            </select>
          </div>
        </div>
        <div className="row ">
          {employee.length > 0 &&
            employee
              .filter((emp) => emp.teamName === team)
              .map((item, index) => (
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="card-collection m-2">
                    <div
                      key={index}
                      className="card p-2"
                      style={{ cursor: "pointer", display: "block" }}
                      aria-label={`Full Name: ${item.userName}`}
                    >
                      <div className="card-img-top">
                        <img
                          style={{ width: "100%", display: "block"}}
                          className="rounded-5"
                          src={item.image}
                          alt={item.userName}
                          aria-label={'Hello world'}
                          role="button"
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title" aria-label={'Hello world'}>
                          Full Name : {item.userName}
                        </h5>
                        <p className="card-text">
                          Designation : {item.jobTitleName}
                        </p>
                        <div className="card-text">
                          Employee Code : {item.employeeCode}
                        </div>
                        <div className="card-text">
                          Techstack :{" "}
                          {item.techstack.map((tech, i) => (
                            <div key={i}>
                              <h6 className="mx-5">{tech}</h6>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
