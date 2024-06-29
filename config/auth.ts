import type { AuthConfig } from "@ioc:Adonis/Addons/Auth";


const authConfig: AuthConfig = {
  guard: "api",
  guards: {

    api: {
      driver: "oat",
      tokenProvider: {
        type: "api",
        driver: "database",
        table: "ApiToken",
        foreignKey: "userId",
      },
      provider: {
        driver: 'prisma',
        identifierKey: 'id',
        uids: ['email'],
        model: 'user',
      },
    },
  },
};

export default authConfig;
