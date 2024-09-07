export class MathUtil {
    public static printTable(n:number):string {
        let temp : string = "";
        for(let i:number=1;i<=10;i++){
            temp += `${n} * ${i} = ${n*i} \n`
        }
        return temp;
    }
}