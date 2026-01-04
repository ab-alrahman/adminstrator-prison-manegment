import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { Document } from './entities/document.entity';
import { Prisoner } from '../prisoners/entities/prisoner.entity';
import { CaseEntity } from '../cases/entities/case.entity';
import { Staff } from '../staff/entities/staff.entity';
import { UserModule } from 'src/app/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Document, Prisoner, CaseEntity, Staff]),
    UserModule,
  ],
  controllers: [DocumentsController],
  providers: [DocumentsService],
  exports: [DocumentsService],
})
export class DocumentsModule {}
