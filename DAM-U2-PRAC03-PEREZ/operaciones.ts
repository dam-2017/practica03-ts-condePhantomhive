export class Operaciones{
    getSuma(n1:number,n2:number):number{
        return n1+n2;
    }
    getResta(n1:number,n2:number):number{
        return n1-n2;
    }
    getFactorial(n1:number):number{
        let f:number=1;
        for(let i=1;i<=n1;i++){
            f=f*i;
        }
        return f;
    }
    getPrimo(n1:number):boolean{
        let count:number=0;
        if(n1==0 || n1==1){return false;}
        
        for(let i:number=1;i<=n1;i++){
            if(n1%i==0){count+=1;}
        }
        if(count>2){return false;}
        else {return true;}
    }
}
/*
-Sumar
-Resta
-Factorial
-Primo
*/