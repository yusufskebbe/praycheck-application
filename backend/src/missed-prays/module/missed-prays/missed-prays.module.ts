import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissedPrayList } from 'src/entities/missed-pray-list';
import { MissedPraysController } from 'src/missed-prays/controller/missed-prays/missed-prays.controller';
import { MissedPraysService } from 'src/missed-prays/service/missed-prays/missed-prays.service';

@Module({
  imports: [TypeOrmModule.forFeature([MissedPrayList])],
  controllers: [MissedPraysController],
  providers: [MissedPraysService],
})
export class MissedPraysModule {}
