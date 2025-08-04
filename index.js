bash

cat > index.js << 'EOF'
const http = require('http');
const PORT = 3000;

http.createServer((req, res) => {
  res.end('Hello from Node.js app!');
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
EOF


