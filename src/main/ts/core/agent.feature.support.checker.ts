export class AgentFeatureSupportChecker {
        
    public static supportsType(inputType:string):boolean {
        let input = document.createElement('input');
        input.setAttribute('type',inputType);

        let invalidValue = 'invalid';
        input.setAttribute('value', invalidValue); 

        return (input.value !== invalidValue);
    }
    
}