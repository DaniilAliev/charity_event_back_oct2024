export enum API_STATUSES {
    OK = 200,
    BAD_REQUEST = 400,
    SERVER_ERROR = 500
}

export enum ERROR_TYPES {
    BAD_REQUEST = 'BAD_REQUEST',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface CustomError extends Error {
    status?: number;
}

