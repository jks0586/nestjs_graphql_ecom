import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UseInterceptors, UploadedFiles, Put, Req, Res, Query } from "@nestjs/common";
import { Category } from "../model/category.schema"
import { CategoryService } from "../service/category.service";
import { FileFieldsInterceptor, FilesInterceptor } from "@nestjs/platform-express";

@Controller('/api/v1/category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}

    // @Post()
    // @UseInterceptors(FileFieldsInterceptor([
    //     { name: 'video', maxCount: 1 },
    //     { name: 'cover', maxCount: 1 },
    // ]))
    // async createBook(@Res() response, @Req() request,  @UploadedFiles() files: { video?: Express.Multer.File[], cover?: Express.Multer.File[] }) {
    //     const requestBody = { createdBy: request.user, title: video.title,  coverImage: files.cover[0].filename }
    //     const newVideo = await this.videoService.createVideo(requestBody);
    //     return response.status(HttpStatus.CREATED).json({
    //         newVideo
    //     })
    // }

    @Get()
    async read(@Query() id): Promise<Object> {
        return await this.categoryService.readCategory(id);
    }


    // @Get('/:id')
    // async stream(@Param('id') id, @Res() response, @Req() request) {
    //     return this.categoryService.streamVideo(id, response, request);
    // }
    // @Put('/:id')
    // async update(@Res() response, @Param('id') id) {
    //     const updatedCategory = await this.categoryService.update(id);
    //     return response.status(HttpStatus.OK).json(updatedCategory)
    // }
    // @Delete('/:id')
    // async delete(@Res() response, @Param('id') id) {
    //     await this.categoryService.delete(id);
    //     return response.status(HttpStatus.OK).json({
    //         user: null
    //     })
    // }
    
}