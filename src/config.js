import { createRequire } from "module";
const require = createRequire(import.meta.url);

import dotenv from 'dotenv'
dotenv.config();

const yargs = require('yargs/yargs')(process.argv.slice(2));

const argv = yargs
                .alias({
                    p: 'port'
                })
                .default({
                    port: 8081
                })
                .argv;

export default {
    mongoLocal: {
        client: process.env.MONGO_CLIENT,
        cnxStr: process.env.MONGO_CNXSTR
    },
    mongoRemote: {
        client: process.env.MONGO_REMOTE_CLIENT,
        cnxStr: process.env.MONGO_REMOTE_CNXSTR
    },
    sqlite3: {
        client: process.env.SQLITE_CLIENT,
        connection: {
            filename: process.env.SQLITE_FILENAME
        },
        useNullAsDefault: process.env.SQLITE_USENULL
    },
    mariaDb: {
        client: process.env.MARIADB_CLIENT,
        connection: {
            host: process.env.MARIADB_HOST,
            user: process.env.MARIADB_USER,
            password: process.env.MARIADB_PASSWORD,
            database: process.env.MARIADB_DATABASE,
        }
    },
    fileSystem: {
        path: process.env.FS_PATH
    },
    PORT: argv.port,
    MODE_SERVER: argv.mode
}