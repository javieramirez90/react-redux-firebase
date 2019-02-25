import React from 'react'

const ProjectSummary = ({project}) => {
  return(
    <div className="card x-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{ project.title}</span>
        <p>Posted by Xavier Ramírez</p>
        <p className="grey-text">8th february, 9 am</p>
      </div>
    </div>    
  )
}


export default ProjectSummary;