{
  "name": "demon-slayer-tweet",
  "version": "1.0.0",
  "description": "A Demon Slayer-inspired social media site for Render.",
  "main": "server.js",
  "type": "commonjs",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "engines": {
    "node": ">=20"
  },
  "dependencies": {
    "bcryptjs": "^3.0.2",
    "connect-pg-simple": "^10.0.0",
    "dotenv": "^16.5.0",
    "express": "^5.1.0",
    "express-session": "^1.18.1",
    "helmet": "^8.1.0",
    "pg": "^8.16.0"
  }
}
