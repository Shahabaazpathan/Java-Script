var count = 0;
while(count<5){
    var value = prompt("Enter the value: ");
    document.write(value);
    document.getElementById("pro2").innerHTML = value;
    count++;
}