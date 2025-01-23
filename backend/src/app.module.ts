import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MissedPrayList } from './entities/missed-pray-list';
import { MissedPraysController } from './missed-prays/controller/missed-prays/missed-prays.controller';
import { MissedPraysModule } from './missed-prays/module/missed-prays/missed-prays.module';
import { MissedPraysService } from './missed-prays/service/missed-prays/missed-prays.service';
import { secretValues } from './secret/secret';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      entities: [MissedPrayList],
      username: 'root',
      password: secretValues.password,
      database: secretValues.database,
      synchronize: true,
    }),
    MissedPraysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
