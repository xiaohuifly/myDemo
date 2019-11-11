/*
fs.open()
path:要打开文件的路径
flags：打开文件的方式 读/写
mode：设置文件模式 读/写/执行  4/2/1 
callback 回调
    err 失败
    fd  被打开文件标识
*/
let fs = require("fs");
fs.open("笔记.txt", 'r', (err, fd) => {
    console.log(err);
    console.log("打开文件成功")
    console.log(fd);
})
大家好