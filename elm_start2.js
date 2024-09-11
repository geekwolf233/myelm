var execSync = require('child_process').execSync;
var tasks = ["ele_check_ck.js",
            "ele_hctmm.js",
            "ele_mhxy.js",
            "ele_tjcs.js"//每次操作五分钟间隔，可去掉加速执行
            ];
for (let i = 0; i < tasks.length; i++) {
    console.log("开始执行"+tasks[i]+"=======================================================");
	execSync("node "+tasks[i],{stdio: 'inherit'});
	console.log("结束执行"+tasks[i]+"=======================================================");
}
