import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnityDto } from '../dto/create-unity.dto';
import { UpdateUnityDto } from '../dto/update-unity.dto';

@Injectable()
export class UnityRepository {
  constructor(private readonly prisma: PrismaService) {}

  async paginate(
    page: number,
    size: number,
    sort: string,
    order: string,
    search: string,
  ) {
    const results = await this.prisma.unity.findMany({
      skip: page * size,
      take: Number(size),
      where: { name: { contains: search } },
      orderBy: { [sort]: order },
    });
    const totalItems = await this.prisma.unity.count({
      where: { name: { contains: search, mode: 'insensitive' } },
    });

    return { results, totalItems };
  }

  async create(createUnityDTO: CreateUnityDto) {
    return await this.prisma.unity.create({ data: createUnityDTO });
  }

  async update(id: bigint, updateUnityDto: UpdateUnityDto) {
    return await this.prisma.unity.update({
      where: { id },
      data: updateUnityDto,
    });
  }

  async remove(id: bigint) {
    return await this.prisma.unity.delete({
      where: { id },
    });
  }

  async findById(id: bigint) {
    return await this.prisma.unity.findFirst({
      where: { id },
    });
  }
}
