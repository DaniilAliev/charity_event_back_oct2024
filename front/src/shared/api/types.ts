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

export type RequestItemType = {
    id: string;
    title: string;
    organization: {
        title: string;
        isVerified: boolean;
    };
    description: string;
    goalDescription: string;
    actionsSchedule: Array<{
        stepLabel: string;
        isDone: boolean;
    }>;
    endingDate: string;
    location: {
        latitude: number;
        longitude: number;
        district: string;
        city: string;
    };
    contacts: {
        email: string;
        phone: string;
        website: string;
    };
    requesterType: string;
    helpType: string;
    helperRequirements: {
        helperType: string;
        isOnline: boolean;
        qualification: string;
    };
    contributorsCount: number;
    requestGoal: number;
    requestGoalCurrentValue: number;
}