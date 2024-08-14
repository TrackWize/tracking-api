import { type ServiceResponse } from "@/types";

export const responseSuccess = (
  message: string = "Email enviado com sucesso!",
  status: number = 200
): ServiceResponse => {
  return {
    status,
    data: {
      success: true,
      message,
    },
  };
};
