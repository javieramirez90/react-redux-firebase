import React from 'react'

const ProjectDetails = (props) => {
  
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quam illum porro deserunt inventore aperiam enim distinctio deleniti nisi natus hic repellat, ratione ipsam. Quae sequi quibusdam dicta ab natus?</p>
        </div>
        <div className="card-action-gret lighten-4 grey-text">
          <div>Posted by Master Javier</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
