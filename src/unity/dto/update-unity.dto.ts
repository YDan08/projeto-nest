import { IsNumber } from 'class-validator';
import { CreateUnityDto } from './create-unity.dto';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';

export class UpdateUnityDto extends PartialType(CreateUnityDto) {
  @IsNumber({}, { message: 'O id não pode ser vazio.' })
  @Type(() => Number)
  readonly id: bigint;
}
