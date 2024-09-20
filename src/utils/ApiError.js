class ApiError extends Error {
    constructor(statusCode, message="something went wrong", errors=[], stack=""){
        this.statusCode = statusCode;
        super.message(message);
        this.errors = errors;
        this.data = null;
        this.success = false;
        if(stack){
            this.stack = stack;
        }{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError};