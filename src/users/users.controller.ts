import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    // ສ້າງmatho get ຂື້ນມາ
    @Get('hello')
    helle(): string {
        return "ສະບາຍດີ"
    }
    // ສ້າງmethod  get ຂື້ນມາເພື່ອເອົາໄປໃຊ້ນມ pate
    @Get('demo')
    demo(): string {
        return "SeeDeMo"
    }
    @Get('number')
    de_mo(): number {
        return 123456
    }
    //method ຮັບdatatype ຈາກ Celine user
    @Post('create')
    create(@Body() { name, lastname }: { name: string; lastname: string }): {
        name: string;
        lastname: string;
    } {
        console.log({ name, lastname });
        return { name, lastname };
    }
    @Put('update/:id')
    update(@Param() { id }: { id: string }): string {
        return id;
    }
    @Get('user')
    findOne(@Query() {id}: {id:string}): string{
        return id;
    }
}
