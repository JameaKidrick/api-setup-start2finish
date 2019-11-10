const server = require('./api/server');

const PORT = process.env.PORT || 4000; // important for deploying backend to ensure a dynamic port 

server.listen(PORT, () => {
  console.log(`\n=== LISTENING TO PORT ${PORT} ===\n`)
})

