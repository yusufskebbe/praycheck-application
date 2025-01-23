import { Body, Controller, Post } from '@nestjs/common';
import { MissedPraysService } from '../../service/missed-prays/missed-prays.service';
import { MissedPrayDto } from 'src/DTO/missed-pray.dto';

@Controller('missed-prays')
export class MissedPraysController {
  constructor(private missedPraysService: MissedPraysService) {}

  @Post('create')
  async createMissedPray(@Body() missedPrayDto: MissedPrayDto) {
    await this.missedPraysService.createMissedPray(missedPrayDto);
    return 'Missed pray created successfully';
  }
}
