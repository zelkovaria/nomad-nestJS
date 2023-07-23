import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/Movie.entity';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }
    
    @Get("/:id") //id별
    getOne(@Param('id')  movieId: string): Movie{
        //타입을 지정할 수 있으며 현재 Movie를 리턴하는 것
        return this.moviesService.getOne(movieId);
    }

    @Post()//post는 기본적으로 movie를 '생성'하기 위함
    create(@Body() movieData){
        return this.moviesService.create(movieData);
;    }

    @Delete('/:id')
    remove(@Param('id') movieId:string){
        return this.moviesService.deleteOne(movieId);
    }

    // @Patch() 리소스의 일부만 업데이트
    // 우리가 보낼 데이터의 오브젝트를 리턴함
    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData){
        return this.moviesService.update(movieId, updateData);
    }

}
