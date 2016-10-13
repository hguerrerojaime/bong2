//import { Currency } from '../types/index';
import { utc,Moment } from 'moment/moment';

export class User {
    
    constructor(
       public name:string = "user",
       public wage:number = 0,
       public hireDate:Moment = utc(),
       public skills:string[] = ["Java","PHP"]
    ) {
        
    }
    
    
    
}