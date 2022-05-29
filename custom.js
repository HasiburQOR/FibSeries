let a = 1;
let b = 1;

for (i = 0; i<= 1000;i++){
    let c = a + b;

    console.log(c);

    a = b;
    b = c;

}
