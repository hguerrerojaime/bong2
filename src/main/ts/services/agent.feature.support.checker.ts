import { Injectable } from '@angular/core';

@Injectable()
export class AgentFeatureSupportChecker {
        
    supportsType(inputType:string):boolean {
        let input = document.createElement('input');
        input.setAttribute('type',inputType);

        let invalidValue = 'invalid';
        input.setAttribute('value', invalidValue); 

        return (input.value !== invalidValue);
    }
    
}