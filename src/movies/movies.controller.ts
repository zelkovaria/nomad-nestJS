import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return "This will return all movies';"
    }

    @Get("search")
    search(@Query("year") searchingYear:string){
        return `We are searching for a movie made after: ${searchingYear}`;
    }
    
    @Get("/:id") //id별
    GetOne(@Param('id')  movieId: string){
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()//post는 기본적으로 movie를 '생성'하기 위함
    create(@Body() movieData){
        console.log(movieData);
        return movieData
;    }

    @Delete('/:id')
    remove(@Param('id') movieId:string){
        return "This will delete a movie";
    }

    // @Patch() 리소스의 일부만 업데이트
    // 우리가 보낼 데이터의 오브젝트를 리턴함
    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData){
        return {
            updateData: movieId,
            ...updateData,
        };
    }

}
