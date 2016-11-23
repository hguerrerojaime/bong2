
import { ValidatorFn } from '@angular/forms';

export interface ConstraintMap {
    [key:string]: ValidatorFn[];
}