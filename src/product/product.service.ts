import { Injectable } from '@nestjs/common';
import { ProductRepository } from './repository/product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly repository: ProductRepository) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const { results, totalItems } = await this.repository.paginate(
      page,
      size,
      sort,
      order,
      search,
    );
    const totalPages = Math.ceil(totalItems / size) - 1;
    const currentPage = Number(page);
    return {
      results,
      pagination: {
        length: totalItems,
        size: size,
        lastPage: totalPages,
        page: currentPage,
        startIndex: currentPage * size,
        endIndex: currentPage * size + (size - 1),
      },
    };
  }

  async create(createProductDTO: CreateProductDto) {
    return await this.repository.create(createProductDTO);
  }

  async update(id: bigint, updateProductDto: UpdateProductDto) {
    return await this.repository.update(id, updateProductDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }
}
