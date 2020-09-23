import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Console } from 'console';

const prisma = new PrismaClient();

@Controller('review')
export class ReviewController {

    @Get()
    async getAll(){
        const listUsers = await prisma.form.findMany();
        return listUsers;
    }

}
