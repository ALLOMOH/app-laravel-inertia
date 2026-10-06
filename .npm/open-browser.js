import { exec } from 'child_process';
import http from 'http';
import { promisify } from 'util';
import { setTimeout as sleep } from 'timers/promises';

const execAsync = promisify(exec);
const URL = 'http://localhost:8000';
const MAX_ATTEMPTS = 30;
const DELAY_MS = 500;

const openBrowser = async (url) => {
    const commands = {
        wind32: `start ${url}`,
        darwin: `open ${url}`,
        // linux: `xdg-open ${url}`
    };

    const command = commands[process.platform] || commands.linux;
    await execAsync(command);
};

const checkServer = () => {
    return new Promise ((resolve) => {
        const request = http.get(URL, () => resolve(true));
        request.on('error', () => resolve(false));
        request.setTimeout(1000, () => {
            request.destroy();
            resolve(false);
        })
    })
};

const waitForServer = async () => {
    console.log('Waiting for server ...');

    for (let attempt =1; attempt <= MAX_ATTEMPTS ; attempt++) {
        if(await checkServer()) {
            console.log('Server ready! Opening browser...');
            await openBrowser(URL);
            return
        }

        console.log(`Attempt ${attempt}/${MAX_ATTEMPTS} - Server not ready yet...`);
        await sleep(DELAY_MS);
    }

    console.error('timeout waiting for server');
    process.exit(1);
};

waitForServer();
