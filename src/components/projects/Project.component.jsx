import { Typography, TextField,Button,Alert } from "@mui/material";
import {useState} from 'react'

const Project = () => {
  const projectDefaultValue = {
    projectName: "",
    description: ""
  }

  const [project,setProject] = useState(projectDefaultValue)

  const handleChangeValue =(event)=>{
    event.preventDefault();
    setProject({...project, [event.target.name]: event.target.value})
  }
  return (
    <div>
      <Typography variant="h3">New Project</Typography>
      <form>
        <TextField required id="outlined-required" label="Project Name" name="projectName" value={project.projectName} onChange={handleChangeValue}/>
        <TextField id="outlined" label="Description" name="description" value={project.description} onChange={handleChangeValue}/>
        <Button variant="outlined">OK</Button>
        <Button variant="outlined">Cancel</Button>
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </form>
    </div>
  );
};

export default Project;
