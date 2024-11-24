// // 21 Callback functionlar
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talaba bo'ling", //0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling" ,// 20-30
//     "uzingizga ishlashingni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling , foydasi yoq endi", // 60
// ];

// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 20 && a <= 30) callback(null, list[4]);
//     else {
//         callback(null, list[5]);
//     }
// }\
// maslahatBering(20, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     console.log("javob:", data);
// });


// // 22. Callback functionlar

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talaba bo'ling", //0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling" ,// 20-30
//     "uzingizga ishlashingni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling , foydasi yoq endi", // 60
// ];
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 20 && a <= 30) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5])
//         },1000)
//     }
// } 
// console.log("passed here 0");
// maslahatBering(70,(err, data) => {
//     if (err) console.log("Error", err);
//     else {
//         console.log(data);
//     }
// });
// console.log("passed here 1");

// //ASYNC function 
// function maslahatBering(a,) {
//     if (typeof a !== "number") throw new  Error("insert a number", null);
//     else if (a <= 20) return (null, list[0]);
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 20 && a <= 30) return list[4];
//     else {
//        return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             },5000)
//         });
//     }
// }  

// //Then / catch 
// console.log("passed here 0");
// maslahatBering(56)
//     .then((data) => {
//         console.log("javob:",data);
//     })
//     .catch((err) => {
//         console.log("ERROR:",err);
//     });
// console.log("passed here 1");

// // asyn/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log("javob");
//     javob = await maslahatBering(70);
//     console.log("javob");
//     javob = await maslahatBering(41);
//     console.log("javob");
// }
// run();




///// A-TASK: 

// function countLetter(letter,word) {  
//     let b = 0;
//     for (let i = 0; i < word.length; i++)  {
//         if (word[i] == letter) {            
//             b ++; 
            
//         }
//      }
//     console.log(`Bu so'zda ${b} harif qatnashgan`)
//     if (b == 0) {
//         console.log("Bu harif yo'q")
    
//     }
//     return b; 
// }
// console.log(countLetter("a", "asadbek"));



///// 22.11.2024  b-TASK: 
/// Birinchi usul
function countLetter1(word) {  
    let b = 0;
    for (let i = 0; i < word.length; i++)  {
        if (word[i] >= "0" && word[i] <= "9") {            
            b ++; 
        }
        
    }
    return b;
}
const result = countLetter("as6dbek7455");
console.log("result_1:", result);

//// Ikkinchi usul 
function countLetter(word) {  
    let b = 0;
    let beliglar = ['>', '<', '/', ',', '.', '?', '!', '~'];

    for (let i = 0; i < word.length; i++)  {
        for (let n = 0; n <= 9; n++ ) {
            if (word[i] == n) {            
                b ++; 
            }
        }
    }

    for (let i = 0; i < word.length;i++) {   
        for(let m = 0; m < beliglar.length; m++) {
            if (beliglar[m] == word[i]) {
                console.log("Uzur siz belgilar qoshib yubordigiz, bu yerda harif va son qoshing");
                return;
            }
        }
    }
    return b; 
}
const result2 = countLetter("as6dbek7>45");
console.log("result_2:", result2);

/// 3 usul
function countLetter2(word) {
    let b = 0;
    for(let i = 0; i < word.length; i++) {
        if(!isNaN(word[i])) {
            b++;
        }
    }
    return b;

}
const result3 = countLetter2("asdbek45");
console.log("result_3:", result3);