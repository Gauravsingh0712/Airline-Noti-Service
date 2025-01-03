const express = require('express')
const { ServerConfig } = require('./config')
const app = express()
const apiRoutes = require('./routes')
const mailsender = require('./config/email-config')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
