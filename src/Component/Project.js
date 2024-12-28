import { useState } from "react";

const Projects = () => {

  
   const time=new Date(20,5,5,1);
  const times=time.getHours();
  console.log(times);
  let t1='';
  let cssstyle={};
  if(times>=1&&times<12){
       t1="Good Morning";
       cssstyle.color="green";
    }
    else if(times>=12&&times<18){
       t1="good afternoon";
      cssstyle.color="yellow";
    }
    else{
       t1="good night";
       cssstyle.color="red";
    }
  

  return(
    <>
     <h1>Hello hi <span style={cssstyle}>{t1}</span></h1>
     <h1></h1>
    </>
  )
}
  export default Projects;
  