import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import path from 'path';
import App from './client/components/app'

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const root = (
        <html>
            <head>
                <link rel="stylesheet" href="/static/bundle.css" type="text/css" ></link>
                <title>SSR React Template</title>
            </head>
            <body>
                <div id="root">
                    <App />
                </div>
                <script src="/static/bundle.js" ></script>
            </body>
        </html>
    )
    const html = ReactDOM.renderToString(root);
    res.send(html);
})

app.listen(3000, () => console.log('server on port 3000'))