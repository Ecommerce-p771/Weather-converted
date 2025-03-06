
function convertTemperature() {
    let temp = document.getElementById("temperature").value;
    // 👉 ইনপুট ফিল্ড থেকে ইউজার যে তাপমাত্রা দিয়েছেন তা সংগ্রহ করে।
    let unit = document.getElementById("unit").value;
    // 👉 ইউজার যে ইউনিট (Celsius/Fahrenheit) নির্বাচন করেছেন, তা সংগ্রহ করে।

    let result = document.getElementById("result");
    // 👉 যেখানে রেজাল্ট দেখানো হবে, সেটিকে সংগ্রহ করে।

    
    if (temp === "") {
        result.innerHTML = "Please enter a valid temperature";
        return;
    }
    // যদি ইউজার কোনো ইনপুট না দেন (খালি ইনপুট), তাহলে "Please enter a valid temperature" দেখাবে এবং ফাংশন এখানেই শেষ হয়ে যাবে।

    
    let convertedTemp;
    if (unit === "celsius") 
//         ➡️ চেক করা হচ্ছে যে, ইউজার Celsius থেকে Fahrenheit পরিবর্তন করতে চাইছেন কিনা।

// যদি unit === "celsius" হয়, তাহলে নিচের কোড চলবে।
{
        convertedTemp = (temp * 9/5) + 32;

        // Celsius থেকে Fahrenheit এ রূপান্তর করার ফর্মুলা ব্যবহার করা হচ্ছে:

        // result.innerHTML = `${temp}°C is ${convertedTemp.toFixed(2)}°F`;
        // ${convertedTemp.toFixed(2)}°F → রূপান্তরিত মান, যেখানে দশমিকের পর ২ সংখ্যা পর্যন্ত দেখানো হচ্ছে।
    } else {
        convertedTemp = (temp - 32) * 5/9;
        result.innerHTML = `${temp}°F is ${convertedTemp.toFixed(2)}°C`;
        // ➡️ Fahrenheit থেকে Celsius রূপান্তরের ফলাফল স্ক্রিনে দেখানো হচ্ছে।

 
    }
}