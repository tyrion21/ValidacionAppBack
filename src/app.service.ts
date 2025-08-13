import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  // async getUsers() {
  //   return this.prisma.user.findMany();
  // }

  async login(user: string, pass: string) {
    const sqlQuery = `
      SELECT name, CONVERT(INT, PWDCOMPARE('${pass}', CONVERT(VARBINARY(255), LOGINPROPERTY(name, 'PasswordHash')))) as resu

      FROM consultas.sys.syslogins
      WHERE CONVERT(INT, PWDCOMPARE('${pass}', CONVERT(VARBINARY(255), LOGINPROPERTY(name, 'PasswordHash')))) = 1
      AND name = '${user}'
    `;

    //const result = await this.prisma.prismaClient5.$queryRawUnsafe(sqlQuery) as Array<object>;
    const result = await this.prisma.prismaClient3.$queryRawUnsafe(sqlQuery) as Array<object>;
    return result.length > 0 ? result[0] : null;
  }
}