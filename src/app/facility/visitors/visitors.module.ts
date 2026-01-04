import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitorsService } from './visitors.service';
import { VisitorsController } from './visitors.controller';
import { Visitor } from './entities/visitor.entity';
import { UserModule } from 'src/app/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Visitor]), UserModule],
  controllers: [VisitorsController],
  providers: [VisitorsService],
  exports: [VisitorsService],
})
export class VisitorsModule {}
