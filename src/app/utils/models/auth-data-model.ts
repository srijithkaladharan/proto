
export interface AuthRequestData {
    email: string,
    password: string
}

export interface AuthResponseData {
    token: string,
    expiresIn: number,
    user: {
        id: string,
        role: string,
        isAdmin: boolean,
    }
}