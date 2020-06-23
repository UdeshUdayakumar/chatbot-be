import { Module } from '@nestjs/common';
import { SurveyController } from "./survey/survey.controller";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { AccountController } from './account/account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from './config/db.config';
import { SurveyService } from './survey/survey.service';
import { SurveyModule } from './survey/survey.module';
import { SurveyRepository } from './survey/survey.repository';

@Module({
  
  imports: [TypeOrmModule.forRoot(DbConfig),
    AccountModule,
    SurveyModule],
  controllers: [
    AccountController,
    SurveyController,
  ],
  providers: [SurveyService,SurveyRepository],
  
})
export class AppModule {}
