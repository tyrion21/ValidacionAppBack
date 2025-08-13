const { exec } = require('child_process');

function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            resolve({ error, stdout, stderr });
        });
    });
}

async function diagnosePM2() {
    console.log('🔍 PM2 Diagnostics\n');
    
    // Check detailed status
    console.log('📊 Detailed PM2 status:');
    const listResult = await runCommand('pm2 list');
    console.log(listResult.stdout);
    
    // Check logs for errors
    console.log('📋 Recent logs:');
    const logsResult = await runCommand('pm2 logs --lines 10');
    console.log(logsResult.stdout);
    
    // Check specific process logs
    console.log('🔍 Process 1 details:');
    const describeResult = await runCommand('pm2 describe 1');
    console.log(describeResult.stdout);
    
    // Restart errored processes
    console.log('🔄 Restarting errored processes...');
    await runCommand('pm2 restart 1');
    
    // Final status
    console.log('✅ Final status:');
    const finalResult = await runCommand('pm2 list');
    console.log(finalResult.stdout);
}

diagnosePM2().catch(console.error);
