export class Cadena{
    a:number=0;
    e:number=0;
    i:number=0;
    o:number=0;
    u:number=0;
    esPalindromo(cad:String):boolean{
        return cad==cad.split(' ').reverse().join('');
    }
    countVocales(cad:String):string{
        for(let i=0;i<cad.length;i++){
            if(cad.charAt(i)=="a" || cad.charAt(i)=="A"){this.a++;}
            if(cad.charAt(i)=="e" || cad.charAt(i)=="E"){this.e++;}
            if(cad.charAt(i)=="i" || cad.charAt(i)=="I"){this.i++;}
            if(cad.charAt(i)=="o" || cad.charAt(i)=="O"){this.o++;}
            if(cad.charAt(i)=="u" || cad.charAt(i)=="U"){this.u++;}
        }
        let c="Total de a's: "+this.a+"\nTotal de e's: "+this.e
        +"\nTotal de i's: "+this.i+"\nTotal de o's: "+this.o+"\nTotal de u's: "+this.u;
        return c;
    }
    countLetras(cad:String):number{
        let aux:string;
        aux=cad.split(' ').join('');
        return aux.length;
    }
    countWords(cad:String):number{
        let a:string[];
        a=cad.split(" ");
        return a.length;
    }


}
/*
1) Verificar si es palíndromo
2) Contar las vocales separadas
3) Contar cuantas letras tiene
4)Contar palabras hay
*/ 