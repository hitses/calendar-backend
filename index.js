import app from './src/app.js'

const PORT = app.get('port')

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`)
})
