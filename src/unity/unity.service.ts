import { Injectable } from '@nestjs/common';
import { UnityRepository } from './repository/unity.repository';
import { CreateUnityDto } from './dto/create-unity.dto';
import { UpdateUnityDto } from './dto/update-unity.dto';

@Injectable()
export class UnityService {
  constructor(private readonly repository: UnityRepository) {}

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

  async create(createUnityDTO: CreateUnityDto) {
    return await this.repository.create(createUnityDTO);
  }

  async update(id: bigint, updateUnityDto: UpdateUnityDto) {
    return await this.repository.update(id, updateUnityDto);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findById(id: bigint) {
    return this.repository.findById(id);
  }
}
