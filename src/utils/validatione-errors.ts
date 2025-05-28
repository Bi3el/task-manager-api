import { ZodError } from "zod";
import {Response} from "express";

export const handleValidationError = (error: ZodError, res: Response) => {
  return res.status(400).json({
    message: "Erro de validação.",
    errors: error.errors.map(err => ({ 
        field: err.path.join("."),
        message: err.message
    })) 
  });
}