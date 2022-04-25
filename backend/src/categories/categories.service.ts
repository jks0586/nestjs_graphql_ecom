import { Injectable,HttpException } from '@nestjs/common';
import { CATEGORIES } from './categories.moack';
@Injectable()
export class CategoriesService {
    categories = CATEGORIES;
    getCategories(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.categories);
        });
    }

    getCategory(categoryId): Promise<any> {
        let id = Number(categoryId);
        return new Promise(resolve => {
            const category = this.categories.find(category => category.id === id);
            if (!category) {
                throw new HttpException('Course does not exist', 404)
            }
            resolve(category);
        });
    }

    addCategory(category): Promise<any> {
        return new Promise(resolve => {
            this.categories.push(category);
            resolve(this.categories);
        });
    }

    deleteCategory(categoryId): Promise<any> {
        let id = Number(categoryId);
        return new Promise(resolve => {
            let index = this.categories.findIndex(category => category.id === id);
            if (index === -1) {
                throw new HttpException('Course does not exist', 404);
            }
            this.categories.splice(index, 1);
            resolve(this.categories);
        });
    }

}
