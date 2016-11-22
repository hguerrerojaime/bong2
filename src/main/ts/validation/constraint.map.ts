
import { ValidatorFn } from '@angular/forms';

export interface ConstraintMap {
    [s:string]: ValidatorFn[];
}