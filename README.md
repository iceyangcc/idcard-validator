# idCardCheck

这是我的项目中使用的身份证号码强校验的代码
es6导出

支持:
* 二代身份证 18位
* 一代身份证 15位

### ES6使用方法
/**
 *ES6 usage
 *IDValidator.isValid(idCard)
 */
```
 import IDValidator from './id_validator_es6'

 const id1 = '320311770706001'
 const id2 = '32031177070600X'
 const id3 = '230102197911069897'
 const id4 = '230102197911069890'

 console.log(IDValidator.isValid(id1))

 console.log(IDValidator.isValid(id2))

 console.log(IDValidator.isValid(id3))

 console.log(IDValidator.isValid(id4))
 ```

 ### more
 如果你使用的其他模块化,方法则需要改造id_validator_es6.js文件中的导出方式