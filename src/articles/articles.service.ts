import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createArticleDto: CreateArticleDto) {
    return this.prismaService.article.create({ data: createArticleDto });
  }

  findDrafts() {
    return this.prismaService.article.findMany({ where: { published: false } });
  }

  findAll() {
    // return `This action returns all articles`;
    return this.prismaService.article.findMany({ where: { published: true } });
  }

  findOne(id: number) {
    // return `This action returns a #${id} article`;
    return this.prismaService.article.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    // return `This action updates a #${id} article`;
    return this.prismaService.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    // return `This action removes a #${id} article`;
    return this.prismaService.article.delete({ where: { id } });
  }
}
