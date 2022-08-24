'use strict'


// misol 1

// {
//     let n = +prompt(" n ta index kiriting");
//     let arr = [];
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         arr[i] = i
//         sum += arr[i]
//     }
//     console.log(sum);
// }

// misol 2



// restarant



let chegirma = 15;
let Kattachegirma = 20;
let minSum = +prompt("summani kiriting");
let maxSum = 300;

if (minSum < 50) {
    console.log(`chegirma yoq chegirmaga ega bo'lish uchun kamida 50$ dan ko'proq narsa oling`);
} else if (maxSum > minSum && minSum < maxSum) {
    console.log(`sizga ${chegirma}% chegirma mavjud bizning restarantlarimizdan foydalanganingiz uchun tashakkur`);
}
if (minSum > 300) {
    console.log(`Siz ${Kattachegirma}% chegirmaga ega bo'ldingiz bizning restarantlarimizdan foydalanganingiz uchun tashakkur`);
}