var execSync = require('child_process').execSync;
var tasks = ["ele_check_ck.js",
            "ele_sign.js",
            "ele_2048.js",
            "ele_elge.js",
            "ele_hctmm.js",
            "ele_mhxy.js",
            "ele_mst.js",
            "ele_tjcs.js",
            "ele_femf.js",
            "ele_sskz.js"//每次操作五分钟间隔，可去掉加速执行
            ];
for (let i = 0; i < tasks.length; i++) {
    console.log("开始执行"+tasks[i]+"=======================================================");
	execSync("node "+tasks[i],{stdio: 'inherit'});
	console.log("结束执行"+tasks[i]+"=======================================================");
}
