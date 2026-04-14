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

