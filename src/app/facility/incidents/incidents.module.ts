import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidentsService } from './incidents.service';
import { IncidentsController } from './incidents.controller';
import { Incident } from './entities/incident.entity';
import { Prisoner } from '../prisoners/entities/prisoner.entity';
import { Staff } from '../staff/entities/staff.entity';
import { UserModule } from 'src/app/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Incident, Prisoner, Staff]), UserModule],
  controllers: [IncidentsController],
  providers: [IncidentsService],
  exports: [IncidentsService],
})
export class IncidentsModule {}
