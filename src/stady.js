// const let

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);
// //letは再宣言不可能
// let val2 = "let変数を再宣言"

// const val3 = "const変数";
// console.log(val3);
// //const変数は上書きふか
// val3 = "const変数を上書き";
// const val3 = "constを再宣言"

//constで定義したオブジェクトはプロパティの変更可能
// const val4 = {
//   name: 'pkpk',
//   age: 26
// };
// val4.name = 'pkpkdayo';
// val4.addres = "pk"
// console.log(val4);

//constで定義した配列はプロパティの変更可能
// const val5 = [1,2]
// val5[0] = 4;
// val5.push(6)
// console.log(val5);

//テンプレート文字列
// const name = " pkpk";
// const age = 28;
//私の名前はpkpkです。年齢は26歳です。

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
//テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`

//アロー関数

//従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です。"));

// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// };
// console.log(func3(10,20));

//分割代入
// const myProfile = {
//   name: "pkpk",
//   age: 26,
// }

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['pkpk',26];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

//デフォルト値
const sayHello = (name) => console.log(`こんにちは！${name}さん`);
sayHello('pkpk');













