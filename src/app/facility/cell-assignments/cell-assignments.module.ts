import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CellAssignmentsService } from './cell-assignments.service';
import { CellAssignmentsController } from './cell-assignments.controller';
import { CellAssignment } from './entities/cell-assignment.entity';
import { Prisoner } from '../prisoners/entities/prisoner.entity';
import { Cell } from '../cells/entities/cell.entity';
import { UserModule } from 'src/app/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([CellAssignment, Prisoner, Cell]), UserModule],
  controllers: [CellAssignmentsController],
  providers: [CellAssignmentsService],
  exports: [CellAssignmentsService],
})
export class CellAssignmentsModule {}
