import { Controller, Render,Res, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './create-category.dto';
@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {}

    @Get('api/')
    async getApiCategories() {
        const categories = await this.categoriesService.getCategories();
        return categories;
    }

    @Get()
    @Render('categories/index')
    async getCategories() {
        const categories = await this.categoriesService.getCategories();
        return {categories:categories};
    }

    @Get(':categoryId')
    async getCategory(@Param('categoryId') categoryId) {
        const category = await this.categoriesService.getCategory(categoryId);
        return category;
    }

    @Post()
    async addCategory(@Body() createCategoryDto: CreateCategoryDto) {
        const category = await this.categoriesService.addCategory(createCategoryDto);
        return category;
    }

    @Delete()
    async deleteCategory(@Query() query) {
        const categories = await this.categoriesService.deleteCategory(query.categoryId);
        return categories;
    }
}
