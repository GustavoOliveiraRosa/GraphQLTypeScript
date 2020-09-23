import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewController } from './review/review.controller';
import { ReviewModule } from './review/review.module';
import { ReviewService } from './review/shared/review.service';

@Module({
  controllers: [AppController, ReviewController],
  providers: [AppService, ReviewService],
  imports: [ReviewModule],
})
export class AppModule {}
