import { DataType } from './data.type';

export enum CurrencyCode {
    AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD,
    BDT, BGN, BHD, BIF, BMD, BND, BOB, BOV, BRL, BSD, BTN, BWP,
    BYN, BYR, BZD, CAD, CDF, CHE, CHF, CHW, CLF, CLP, CNY, COP,
    COU, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN,
    ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD,
    HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD,
    JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK,
    LBP, LKR, LRD, LSL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP,
    MRO, MUR, MVR, MWK, MXN, MXV, MYR, MZN, NAD, NGN, NIO, NOK,
    NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON,
    RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS,
    SRD, SSP, STD, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD,
    TWD, TZS, UAH, UGX, USD, USN, UYI, UYU, UZS, VEF, VND, VUV,
    WST, XAF, XAG, XAU, XBA, XBB, XBC, XBD, XCD, XDR, XFU, XOF,
    XPD, XPF, XPT, XSU, XTS, XUA, XXX, YER, ZAR, ZMW
}

export class TCurrency extends DataType<any,any> { 
    ammount: number;
    code: CurrencyCode;

    constructor(ammount:number = 0,code:string = "MXN") {
        super();
        this.ammount = ammount;
        this.code = CurrencyCode[code];

        this.nativeValue = this;
    }

    public json():any {
        return {
            ammount:this.nativeValue.ammount,
            code: CurrencyCode[this.nativeValue.code]
        };
    }


}