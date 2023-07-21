import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return "This will return all movies';"
    }
    @Get("/:id") //id별
    GetOne(@Param('id')  movieId: string){
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()//post는 기본적으로 movie를 '생성'하기 위함
    create(){
        return "This will create a movie";
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string){
        return "This will delete a movie";
    }

    // @Patch() 리소스의 일부만 업데이트
    @Patch(':/id')
    path(@Param('id') movieId: string){
        return `This will path a movie withe the id: ${movieId}`;
    }
}
