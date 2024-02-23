// 引入moment模块，用于处理时间格式
const moment = require('moment');

// 定义一个函数，用于查询当前时间，并返回一个字符串
function queryTime() {
  // 获取当前时间的moment对象
  let now = moment();
  // 格式化时间为YYYY-MM-DD HH:mm:ss
  let formatted = now.format('YYYY-MM-DD HH:mm:ss');
  // 返回时间字符串
  return formatted;
}

// 调用函数，打印结果
console.log(queryTime());