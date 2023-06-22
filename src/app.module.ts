import { Module } from '@nestjs/common';
import { UnityModule } from './unity/unity.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UnityModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
