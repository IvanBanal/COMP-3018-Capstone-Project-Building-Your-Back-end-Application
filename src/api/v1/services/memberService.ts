import { Member } from "../models/interfaces";
import * as repo from "../repositories/memberRepository";

let counter = 1;

/**
 * This will generate a unique Member ID like member_000001.
 * @returns Member ID string.
 */
const generateId = () => {
    /**
     * counter++ will use the current value of counter and increase 
     * it by 1 for the next call.
     * .padStart makes the string at least 6 characters long and if 
     * it's shorter, it pads with "0" at the start.
     */
    return `member_${String(counter++).padStart(6, "0")}`;
};

/**
 * This will create a new member and saves it to Firestore.
 * @param data - Member input data.
 * @returns Created Member with generated fields.
 */
export const createMemberService = async (data: Partial<Member>): Promise<Member> => {
    const now = new Date().toDateString();

    const member: Member = {
        id: generateId(),
        name: data.name!,
        email: data.email!,
        membershipDate: data.membershipDate!,
        status: data.status ?? "active",
        borrowLimit: data.borrowLimit!,
        phoneNumber: data.phoneNumber!,
        address: data.address!,
        booksBorrowed: data.booksBorrowed ?? [],
        createdAt: now,
        updatedAt: now
    };

    return await repo.createMemberRepo(member);
};

/**
 * This will retrieve all members.
 * @returns Array of members.
 */
export const getAllMembersService = async () => {
    return await repo.getAllMembersRepo();
};

/**
 * This will retrieve member by ID.
 * @params id - Member ID.
 * @returns Member or null.
 */
export const getMemberByIdService = async (id: string) => {
    return await repo.getMemberByIdRepo(id);
};

/** 
 * This will update a member by ID.
 * @param id - Member ID.
 * @returns Updated member or null.
 */
export const updateMemberService = async (id: string, data: Partial<Member>): Promise<Member | null> => {
    const updateData = {
        ...data,
        updatedAt: new Date().toDateString()
    };
    
    return await repo.updateMemberRepo(id, updateData);
};

/**
 * This will delete a member by ID.
 * @param id - Member ID.
 * @returns True if deleted, false if not found.
 */
export const deleteMemberService = async (id: string) => {
    return await repo.deleteMemberRepo(id);
}
