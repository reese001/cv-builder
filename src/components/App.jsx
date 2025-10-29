import { useState } from "react"

import Header from "./Header"
import Education from "./Education"
import Professional from "./Professional"
function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [github, setGithub] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [major, setMajor] = useState("")
  const [school, setSchool] = useState("")
  const [schoolYear, setSchoolYear] = useState("")
  const [company, setCompany] = useState("")
  const [position, setPosition] = useState("")
  const [jobYear, setJobYear] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
  }
  
  return (
    <div className="app-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Build Your CV</h1>
          
          <h2>Personal Information</h2>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              placeholder="john.doe@example.com" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              placeholder="+1 (555) 123-4567" 
              id="phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="github">GitHub</label>
            <input 
              type="text" 
              placeholder="github.com/johndoe" 
              id="github" 
              value={github} 
              onChange={(e) => setGithub(e.target.value)} 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="linkedin">LinkedIn</label>
            <input 
              type="text" 
              placeholder="linkedin.com/in/johndoe" 
              id="linkedin" 
              value={linkedin} 
              onChange={(e) => setLinkedin(e.target.value)} 
            />
          </div>
          
          <h2>Education</h2>
          <div className="input-group">
            <label htmlFor="major">Major</label>
            <input 
              type="text" 
              placeholder="Computer Science" 
              id="major" 
              value={major} 
              onChange={(e) => setMajor(e.target.value)} 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="school">School</label>
            <input 
              type="text" 
              placeholder="University of Example" 
              id="school" 
              value={school} 
              onChange={(e) => setSchool(e.target.value)} 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="school-year">Year</label>
            <input 
              type="text" 
              placeholder="2020 - 2024" 
              id="school-year" 
              value={schoolYear} 
              onChange={(e) => setSchoolYear(e.target.value)}
            />
          </div>
          
          <h2>Professional Experience</h2>
          <div className="input-group">
            <label htmlFor="company">Company</label>
            <input 
              type="text" 
              placeholder="Tech Company Inc." 
              id="company" 
              value={company} 
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="position">Position</label>
            <input 
              type="text" 
              placeholder="Software Engineer" 
              id="position" 
              value={position} 
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="job-year">Year</label>
            <input 
              type="text" 
              placeholder="2024 - Present" 
              id="job-year" 
              value={jobYear} 
              onChange={(e) => setJobYear(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="resume-container">
        <h1 className="resume-title">Resume Preview</h1>
        <Header 
          name={name} 
          email={email} 
          phone={phone} 
          github={github} 
          linkedin={linkedin}
        />
        <Education 
          major={major} 
          school={school} 
          schoolYear={schoolYear}
        /> 
        <Professional 
          company={company} 
          position={position} 
          jobYear={jobYear}
        />
      </div>
    </div>
  )
  
}

export default App
