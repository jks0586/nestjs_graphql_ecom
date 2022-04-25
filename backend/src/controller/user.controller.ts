import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { User } from "../model/user.schema";
import { UserService } from "../service/user.service";
import { JwtService } from '@nestjs/jwt'

@Controller('/api/v1/user')

export class UserController {
    constructor(private readonly userServerice: UserService,
        private jwtService: JwtService
    ) { }

    @Get()
    async getAll(@Res() response) {
        const userlist = await this.userServerice.listall();
        return response.status(HttpStatus.CREATED).json(userlist)
    }

    @Post('/signup')
    async Signup(@Res() response, @Body() user: User) {
        const newUSer = await this.userServerice.signup(user);
        return response.status(HttpStatus.CREATED).json({
            newUSer
        })
    }
    @Post('/signin')
    async SignIn(@Res() response, @Body() user: User) {
        const token = await this.userServerice.signin(user, this.jwtService);
        return response.status(HttpStatus.OK).json(token)
    }
}