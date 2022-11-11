class ApiError extends Error{
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400){
        super(message);
        this.statusCode = statusCode;
    }
}

class BadRequestError extends ApiError{
    constructor(message: string) {
        super(message, 400)
    }
}

class UnauthorizedError extends ApiError{
    constructor(message: string) {
        super(message, 401)
    }
}

class NotFoundError extends ApiError{
    constructor(message: string) {
        super(message, 404)
    }
}

export { ApiError, BadRequestError, UnauthorizedError, NotFoundError }