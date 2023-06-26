import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductService } from './product.service';
import { ProductRepository } from './repository/product.repository';

@Module({
  controllers: [ProductController],
  providers: [PrismaService, ProductService, ProductRepository],
})
export class ProductModule {}
