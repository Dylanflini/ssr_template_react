import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import path from 'path';
import App from '../client/components/app'

const app = express();

app.use('/static',express.static(path.join(__dirname, '..','..','dist','static')));

app.get('/', (req, res) => {
    const root = (
        <html>
            <body>
                <div id="root">
                    <App/>
                </div>
                <script src="/static/bundle.js" ></script>
            </body>
        </html>
    )
    const html = ReactDOM.renderToString(root);
    res.send(html);
})

app.listen(3000, () => console.log('server on port 3000'))