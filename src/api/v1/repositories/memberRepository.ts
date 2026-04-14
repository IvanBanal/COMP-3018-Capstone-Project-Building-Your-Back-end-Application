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

/**
 * This will retrieve all members.
 * @returns Array of members.
 */
export const getAllMembersRepo = async (): Promise<Member[]> => {
    const snapshot = await db.collection(COLLECTION).get();
    return snapshot.docs.map(doc => doc.data() as Member); 
};


