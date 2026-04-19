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

/**
 * This will retrieve member by ID.
 * @params id - Member ID
 * @returns Member or null
 */
export const getMemberByIdRepo = async (id: string): Promise<Member | null> => {
    const doc = await db.collection(COLLECTION).doc(id).get();
    if (!doc.exists) return null;
    return doc.data() as Member;
};

/**
 * This will update a member by ID in Firestore.
 * @param id - Member ID.
 * @returns Updated member or null if not found.
 */
export const updateMemberRepo = async (id: string, data: Partial<Member>): Promise<Member | null> => {
    const docRef = db.collection(COLLECTION).doc(id);
    const doc = await docRef.get();
    if (!doc.exists) return null;

    await docRef.update(data);
    const updateDoc = await docRef.get();
    return updateDoc.data() as Member;
};