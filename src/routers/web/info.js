import { Router } from 'express';
import os from 'os';

const infoRouter = new Router();

const numCPUs = os.cpus().length

infoRouter.get('/info', (req, res) => {
    const info = {
        argv: process.argv.slice(2),
        platform: process.platform,
        version: process.version,
        memory: process.memoryUsage().rss,
        executable: process.execPath,
        pid: process.pid,
        path: process.cwd(),
        cpus: numCPUs,
    }
    res.render( 'pages/info', { info } );
});



export default infoRouter