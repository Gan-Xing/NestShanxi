import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TreeModule } from './tree/tree.module';
import { MaterialModule } from './material/material.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TreeModule, MaterialModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
