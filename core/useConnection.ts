import { dbConnection } from "./dbConnection";

export function useConnection(): CallableFunction {
  return function (
    target: Object,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    const connection = dbConnection(Bun.env.DB_HOST ?? "");
    const oldMethod = descriptor.value;

    descriptor.value = async function (...args: any): Promise<any> {
      await connection.connect();
      const result = await oldMethod(...args);
      await connection.disconnect()
      return result;
    };
  };
}
