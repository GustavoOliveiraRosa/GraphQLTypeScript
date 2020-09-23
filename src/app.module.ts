import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewController } from './review/review.controller';
import { ReviewModule } from './review/review.module';
import { Review.Service } from './review/shared/review.service';
import { Shared } from './review/shared';
import { ReviewController } from './review/review.controller';

@Module({
  controllers: [AppController, ReviewController],
  providers: [AppService, Shared, Review.Service],
  imports: [ReviewModule],
})
export class AppModule {}
