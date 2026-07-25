services:
  - type: web
    name: demon-slayer-tweet
    runtime: node
    plan: free
    buildCommand: npm install
    startCommand: npm start
    healthCheckPath: /api/me
    envVars:
      - key: NODE_ENV
        value: production
      - key: SESSION_SECRET
        generateValue: true
      - key: DATABASE_URL
        fromDatabase:
          name: demon-slayer-tweet-db
          property: connectionString

databases:
  - name: demon-slayer-tweet-db
    plan: free
    databaseName: demon_slayer_tweet
    user: demon_slayer_tweet_user
