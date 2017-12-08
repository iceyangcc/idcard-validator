
/**
 * ES6使用指南 (推荐)
 * IDValidator.isValid(idCard)
 */

 import IDValidator from './id_validator_es6'

 const id1 = '320311770706001'
 const id2 = '32031177070600X'
 const id3 = '230102197911069897'
 const id4 = '230102197911069890'

 console.log(IDValidator.isValid(id1))

 console.log(IDValidator.isValid(id2))

 console.log(IDValidator.isValid(id3))

 console.log(IDValidator.isValid(id4))
