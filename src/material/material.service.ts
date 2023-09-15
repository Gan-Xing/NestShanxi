import { Injectable } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MaterialService {
  constructor(private prisma: PrismaService) {}

  async create(createMaterialDto: CreateMaterialDto) {
    const materialData = {
      name: createMaterialDto.name,
      code: createMaterialDto.code,
      groupId: createMaterialDto.groupId,
      sourceChannel: createMaterialDto.sourceChannel,
      type: createMaterialDto.type,
      templateUrl: createMaterialDto.templateUrl,
      templateFileId: createMaterialDto.templateFileId,
      templateFileName: createMaterialDto.templateFileName,
      demoFileId: createMaterialDto.demoFileId,
      demoFileName: createMaterialDto.demoFileName,
      demoUrl: createMaterialDto.demoUrl,
      demoDescription: createMaterialDto.demoDescription,
      templateCusContent: createMaterialDto.templateCusContent,
      legalSizeLimit: createMaterialDto.legalSizeLimit,
      legalFormats: createMaterialDto.legalFormats,
      legalPageSize: createMaterialDto.legalPageSize,
      legalIsShare: createMaterialDto.legalIsShare,
      treeStructureId: createMaterialDto.treeStructureId,
    };

    return await this.prisma.material.create({ data: materialData });
  }

  async findAll() {
    return await this.prisma.material.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.material.findUnique({ where: { id } });
  }

  async update(id: number, updateMaterialDto: UpdateMaterialDto) {
    return await this.prisma.material.update({
      where: { id },
      data: updateMaterialDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.material.delete({ where: { id } });
  }
}
