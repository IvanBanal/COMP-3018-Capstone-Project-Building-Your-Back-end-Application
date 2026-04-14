export interface Book {
    id?: string;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    totalCopies: number;
    availableCopies: number;
    publishedYear: number;
    description: string;
    availability: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface Member {
    id?: string;
    name: string;
    email: string;
    membershipDate: Date;
    status: "active" | "inactive" | "suspended";
    borrowLimit: number;
    phoneNumber: string;
    address: string;
    booksBorrowed: string[];
    createdAt?: string;
    updatedAt?: string;
}