let style = ["Джаз", "Блюз"];
style.push("рок-н-ролл");
style[Math.floor((style.length - 1) / 2)] = "Классика";
console.log(style.shift());
style.unshift("рэп", "Рэгги");
console.log(style);
