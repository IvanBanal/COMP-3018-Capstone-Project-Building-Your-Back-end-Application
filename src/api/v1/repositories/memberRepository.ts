import { db } from "../config/firebaseConfig";
import { Member } from "../models/interfaces";

const COLLECTION = "members";

/**
 * This will create a new member in Firestore.
 * @param member - Member object to save.
 * @returns The saved Member.
 */
export const createMemberRepo = async (member: Member): Promise<Member> => {
    const docRef = db.collection(COLLECTION).doc(member.id!);
    await docRef.set(member);
    return member;
};

