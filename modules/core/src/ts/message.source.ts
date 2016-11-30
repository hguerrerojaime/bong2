export class MessageSource {

    private constructor(private messages:any) {}

    public static from(messages:any) {
        return new MessageSource(messages);
    }

    public get(code:string,defaultMessage:string = "",args:string[] = []):string {

        let message:string = this.messages[code] ? this.messages[code] : defaultMessage;

        for (let i in args) {
            let arg:string = args[i];
            message = message.replace(new RegExp(`\\{${i}\\}`,'g'),arg);
        }

        return message;

    }



}