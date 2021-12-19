const os=require('os');

console.log("Free memorys is: ", os.totalmem());
console.log("Total free memory is: ", os.freemem()/1000000000);
console.log("Os type is: ", os.type());
console.log("Home Directory is: ", os.homedir());
console.log("Platform is ", os.platform());
console.log("System Uptime is: ", os.uptime());
console.log("Network details are: ",os.networkInterfaces());