const weight_btn = document.getElementById("weight-btn");
const height_btn = document.getElementById("height-btn");
const save_btn = document.getElementById("save-btn");
const bmi_p = document.getElementById("counter-h3");
const weight_p = document.getElementById("weight");
const height_p = document.getElementById("height");
const spinner = document.getElementById("spinner");
const bmi_statement = document.getElementById("bmi-statement");


let underweight = "UNDERWEIGHT";
let healthy = "HEALTHY";
let overweight = "you are overweight , please workout 🏋🏻";
let obese = "you are obese , please follow a strict diet 🥦 + 🏋🏻";
let extremely_obese = "you are extremely obese , please consult with a doctor 🩺";

weight_btn.addEventListener('click', function(){
let weight_value = prompt("please enter your WEIGHT in KG.");
  value_w = Number(weight_value);
 weight_p.innerHTML = "Your weight : " + value_w;
 return value_w;
});

height_btn.addEventListener('click', function(){
    let height_value = prompt("please enter your HEIGHT in METER");
     value_h = Number(height_value);
    height_p.innerHTML = "Your height : " +  value_h;
    return value_h;
});

save_btn.addEventListener('click', function(){
    let save_value = value_w / (value_h * value_h);
    console.log(save_value);
    bmi_statement.innerHTML =" Your BMI is : " + save_value;




setTimeout(function(){
    if(save_value < 18.5){
        bmi_statement.innerHTML = "you are " + underweight +" please eat more healthy foods"
        bmi_statement.style.color = " rgb(250, 151, 134)";
    }else if(save_value > 18.5 & save_value < 24.9){
        bmi_statement.innerHTML = "you are " + healthy + " 💪🏻";
        bmi_statement.style.color = "rgb(64, 224, 72)";
    }else if(save_value > 25.5 & save_value < 29.9){
        bmi_statement.innerHTML = overweight;
        bmi_statement.style.color = "rgb(226, 74, 74)";
    }else if(save_value > 30 & save_value < 34.9){
        bmi_statement.innerHTML = obese;
        bmi_statement.style.color = "rgb(235, 26, 26)";
    }else{
        bmi_statement.innerHTML = extremely_obese;
        bmi_statement.style.color = "rgb(199, 0, 0)";
    }}, 1500);

});

