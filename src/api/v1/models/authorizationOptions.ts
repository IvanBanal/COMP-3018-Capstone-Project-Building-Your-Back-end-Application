export interface AuthorizationOptions {
    hasRole: Array<"member" | "librarian" | "admin">;
    allowSameUser?: boolean;
}
