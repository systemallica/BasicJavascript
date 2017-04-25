function convertToRoman(num) {
 var roman = "";
 //Thousands 
 while(num / 1000 >= 1){
   roman += "M";
   num -= 1000;
 }
 if((num / 500 >= 1) && (num / 500 < 1.8)){
   roman += "D";
   num -= 500;
 //Case 900  
 }else if((num / 500 >= 1.8)){
   roman += "CM";
   num -= 900;
 }
 //Case 400
 if (num / 100 >= 4){
   roman += "CD";
   num -= 400;
 } 
 //Hundreds
 while(num / 100 >= 1){
   roman += "C";
   num -= 100;
 }
 //Case 50
 if(num / 50 >= 1 && (num / 50 < 1.8)){
   roman += "L";
   num -= 50;
 //Case 90
 }else if((num / 50 >= 1.8)){
   roman += "XC";
   num -= 90;
 }
 //Case 40
 if (num / 10 >= 4){
   roman += "XL";
   num -=40;
 } 
 //Tens
 while(num / 10 >= 1){
   roman += "X";
   num -= 10;
 }
 //Case 5
 if(num / 5 >= 1 && (num / 5 < 1.8)){
   roman += "V";
   num -= 5;
 //Case 9
 }else if((num / 5 >= 1.8)){
   roman += "IX";
   num -= 9;
 }
 //Case 4
 if (num / 1 >= 4){
   roman += "IV";
   num -=4;
 }
 //Units
 while(num / 1 >= 1){
   roman += "I";
   num -= 1;
 }
 return roman;
}