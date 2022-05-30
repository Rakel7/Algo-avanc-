
/**
 * 
 * Demande 1
 */
const functionOne = (n) => {
debugger;
    if(n === 1){
       console.log(n);
       return n;
    }else{
        return functionOne(n-1)*n;
    }

}
console.log(functionOne(4));


/**
 * Fionacci
 */

const fibonacci = (n) => {

    if(n>1){
        n = fibonacci(n-1)+ fibonacci(n-2);
    }
return n;
}
console.log(fibonacci(4));


/**
 * Syracuse première étape
 */

let N=15;

const syracuse = (i) => {

    if(i === 0){
        return N;
    }
    let n = syracuse(i-1);

    if(n %2 === 0){
        i = n/2;
    }else{
        i = 3*n +1;
    }
    return i;
}
 console.log(syracuse(1));


 /**
 * Syracuse deuxième étape
 */

const syracuse = (N, i) => {

    if(i === 0){
        return N;
    }
    let n = syracuse(N, i-1);

    if(n %2 === 0){
        i = n/2;
    }else{
        i = 3*n +1;
    }
    return i;
}
 console.log(syracuse(100, 1));


/**
 * PGCD (bonus)
 */

const pgcd = (a, b) => {

    if(b === 0){
        
        return a;
        
    }else{
       let r = a%b;

        return pgcd(b,r);
    }

}
console.log(pgcd(10,2));