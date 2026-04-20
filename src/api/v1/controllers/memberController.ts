import { Request, Response } from "express";
import * as service from "../services/memberService";
import { HTTP_STATUS } from "../constants/httpConstants";

/**
 * This is a controller to create a new member.
 */
export const createMember = async (req: Request, res: Response): Promise<void> => {
    const member = await service.createMemberService(req.body);

    res.status(HTTP_STATUS.CREATED).json({
        message: "Member created",
        data: member
    });
};

/**
 * This is a controller to retrieve all members.
 */
export const getAllMembers = async (req: Request, res: Response) => {
    const members = await service.getAllMembersService();

    res.status(HTTP_STATUS.OK).json({
        message: "Members retrieved",
        count: members.length,
        data: members
    });
};

/**
 * This is a controller to retrieve a member by ID.
 */
export const getMemberById = async (req: Request, res: Response) => {
    const member = await service.getMemberByIdService(req.params.id);

    if (!member) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Member not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Member retrieved",
        data: member
    });
};

/**
 * This is a controller to update a member by ID.
 */
export const updateMember = async (req: Request, res: Response) => {
    const updated = await service.updateMemberService(req.params.id, req.body);

    if (!updated) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Member not found"
        });
        return;
    }
    
    res.status(HTTP_STATUS.OK).json({
        message: "Member updated",
        data: updated
    });
};

/**
 * This is a controller to delete a member by ID.
 */
export const deleteMember = async (req: Request, res: Response) => {
    const deleted = await service.deleteMemberService(req.params.id);

    if (!deleted) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Member not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Member deleted"
    });
};

