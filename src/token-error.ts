export enum ErrorCodeEnum {
    REGISTRATION_ERROR,
    TOKEN_NOT_REFRESHED,
    TOKEN_NOT_RECEIVED,
    REQUEST_ERR,
    TWOFA_REQ,
    TWOFA_ERROR
}

export class TokenError extends Error {

    code: ErrorCodeEnum;
    extra: any;

    constructor(code: ErrorCodeEnum, extra?: any) {
        switch (code) {
            case ErrorCodeEnum.REGISTRATION_ERROR:
                super(`Registration error. Code: ${code}`);
                break;
            case ErrorCodeEnum.TOKEN_NOT_REFRESHED:
                super(`Token was not refreshed, tokens are the same. Code: ${code}`);
                break;
            case ErrorCodeEnum.TOKEN_NOT_RECEIVED:
                super(`Can't obtain token. Code: ${code}. Error extra: ${extra}`);
                break;
            case ErrorCodeEnum.REQUEST_ERR:
                super(`Error when making request. Code: ${code}. Error extra: ${extra}`);
                break;
            case ErrorCodeEnum.TWOFA_REQ:
                super(`Two factor auth is required. Code: ${code}. Error extra: ${extra}`);
                break;
            case ErrorCodeEnum.TWOFA_ERROR:
                super(`2FA Error. Code: ${code}. Error extra: ${extra}`);
                break;
            default:
                super('Unexpected error occurred.');
                break;
        }
        this.code = code;
        this.extra = extra;
    }

}