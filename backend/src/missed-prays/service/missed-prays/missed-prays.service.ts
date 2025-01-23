import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MissedPrayDto } from 'src/DTO/missed-pray.dto';
import { MissedPrayList } from 'src/entities/missed-pray-list';
import { Repository } from 'typeorm';

@Injectable()
export class MissedPraysService {
  constructor(
    @InjectRepository(MissedPrayList)
    private missedPrayListRepository: Repository<MissedPrayList>,
  ) {}

  async createMissedPray(missedPrayDto: MissedPrayDto) {
    const { userId, prayId, missedAt } = missedPrayDto;

    const missedPray = this.missedPrayListRepository.create({
      userId,
      prayId,
      missedAt,
    });
    return await this.missedPrayListRepository.save(missedPray);
  }

  async getMissedPray(userId: number) {
    const missedPray = await this.missedPrayListRepository.find({
      where: { userId },
    });
    if (!missedPray) {
      throw new NotFoundException('Missed pray not found');
    }

    return missedPray;
  }
}
