/**
 * 
   编写一个函数，以整数作为输入，并返回该数字的二进制表示形式中等于 1 的位数。您可以保证输入是非负的。
   示例1234： is的二进制表示，因此在这种情况下10011010010该函数应返回5
 * 

   1. 数字转换为[2,36]进制： 使用toString()方法，可以给一个参数，代表将数字转为为[2,36]进制的字符串展示

   方法2：countBitsBySplit: 
        转换为二进制字符串,因为是要获取1的个数，所以以“0”字符串来切割原二进制字符串，
        切割后生成的数组中会包含“”空字符串，所以可以以“”拼接数组后，得到的也是只包含1的字符串的长度
   方法1：countBitsBySelf：
        转换为二进制字符串，对字符串中的每个字符进行遍历，如果是1，则count++，最后返回count。
   
*/

var countBitsBySplit = function (n) {
    // Program Me
    const str = n.toString(2);
    let count = str.split('0').join('').length;
    return count
};
var countBitsBySelf = function (n) {
    // Program Me
    const str = n.toString(2);
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '1') {
            count++
        }
    }
    return count
};