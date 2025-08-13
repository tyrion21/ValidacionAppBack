const { exec } = require('child_process');

function runCommand(command, description) {
    return new Promise((resolve) => {
        console.log(`🔧 ${description}`);
        exec(command, (error, stdout, stderr) => {
            if (stdout) console.log(stdout);
            if (stderr) console.log(`Warning: ${stderr}`);
            if (error) console.log(`Error: ${error.message}`);
            resolve();
        });
    });
}

async function fixPM2() {
    console.log('🛠️  Fixing PM2 processes...\n');
    
    // Option 1: Restart specific process
    await runCommand('pm2 restart 1', 'Restarting process ID 1');
    
    // Option 2: Delete problematic process
    await runCommand('pm2 delete 1', 'Deleting problematic process');
    
    // Option 3: Complete cleanup and restart
    await runCommand('pm2 delete all', 'Deleting all processes');
    await runCommand('pm2 start ecosystem.config.js', 'Starting with ecosystem config');
    
    // Show final status
    setTimeout(async () => {
        await runCommand('pm2 list', 'Final PM2 status');
        await runCommand('pm2 logs --lines 5', 'Recent logs');
    }, 2000);
}

fixPM2().catch(console.error);
