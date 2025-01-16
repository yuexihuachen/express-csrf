import type {Request, Response, NextFunction} from 'express';

export type DoubleCsrfProtection = (
    req: Request,
    res: Response,
    next: NextFunction
) => void;