const { exec } = require('child_process');

async function cleanupPM2() {
    console.log('🧹 Cleaning up PM2 processes...\n');
    
    // Stop all processes
    await exec('pm2 stop all');
    console.log('⏹️  Stopped all processes');
    
    // Delete all processes
    await exec('pm2 delete all');
    console.log('🗑️  Deleted all processes');
    
    // Kill PM2 daemon
    await exec('pm2 kill');
    console.log('💀 Killed PM2 daemon');
    
    // Restart with ecosystem config
    await exec('pm2 start ecosystem.config.js');
    console.log('🚀 Restarted with ecosystem config');
    
    // Show final status
    setTimeout(async () => {
        const { stdout } = await new Promise(resolve => 
            exec('pm2 list', (error, stdout) => resolve({ stdout }))
        );
        console.log('✅ Final status:');
        console.log(stdout);
    }, 2000);
}

cleanupPM2().catch(console.error);
