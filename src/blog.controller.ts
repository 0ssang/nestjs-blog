import {
    Controller,
    Param,
    Body,
    Delete,
    Get,
    Post,
    Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('bolg')
export class BlogController {
    // NestJS에서 의존성 주입을 주로 사용하지만 아직 배우지 않았으므로 생성자를 사용함
    blogService: BlogService;
    constructor() {
        this.blogService = new BlogService();
    }

    @Get()
    getAllPosts() {
        console.log('모든 게시글 가져오기');
        return this.blogService.getAllPosts();
    }

    @Post()
    createPost(@Body() postDto) {
        console.log('게시글 작성');
        this.blogService.createPost(postDto);
        return 'success';
    }

    @Get('/:id')
    getPost(@Param('id') id: string) {
        console.log(`[id: ${id}]게시글 하나 가져오기`);
        return this.blogService.getPost(id);
    }

    @Delete('/:id')
    deletePost(@Param('id') id: string) {
        console.log('게시글 삭제');
        this.blogService.delete(id);
        return 'success';
    }

    @Put('/:id')
    updatePost(@Param('id') id: string, @Body() postDto) {
        console.log(`[${id}] 게시글 업데이트`);
        return this.blogService.updatePost(id, postDto);
    }
}
