const express = require("express")
const {uuid} = require("uuidv4")

const app = express()

app.use(express.json())

const projects = []

app.get('/projects', (req, res) => {
  const { title } = req.query
  const results = title ? projects.filter(project => project.title.includes(title)) : projects
  return res.json(results)
})

app.post('/projects', (req, res) => {
  const { title, owner } = req.body
  const id = uuid()
  const project = {
    id,
    title,
    owner
  }
  projects.push(project)
  return res.json(project)
})

app.put('/project/:id', (req, res) => {
  const { id } = req.params
  const { title, owner } = req.body
  const projectIndex = projects.findIndex(project => project.id === id)
  if (projectIndex < 0) {
    return res.status(400).json({ error: "Project not found."})
  }
  const project = {
    id,
    title,
    owner
  }
  projects[projectIndex] = project
  return res.json(project)
})