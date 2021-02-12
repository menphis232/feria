export interface iToken {
    token: string;
}

export const emptyToken: iToken = {
    token: undefined
}

export interface iUser {
    username: string;
    points: number;
    following: number;
    followers: number;
}