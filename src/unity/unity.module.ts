import { Module } from '@nestjs/common';
import { UnityController } from './unity.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UnityService } from './unity.service';
import { UnityRepository } from './repository/unity.repository';

@Module({
  controllers: [UnityController],
  providers: [PrismaService, UnityService, UnityRepository],
})
export class UnityModule {}
