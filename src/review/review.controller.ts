import { Controller, Get, Param } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Console } from 'console';

const prisma = new PrismaClient();

@Controller('review')
export class ReviewController {

    @Get()
    async getAllForm(){
        const listForms = await prisma.form.findMany();
        return listForms;
    }

    @Get(':id')
    async getById(@Param('id') id:number){
        const listUsers = await prisma.form.findMany({
            where: {
                id: Number(id)
            }
          })
        return listUsers;
    }

}
