import { EntityRepository, Repository } from 'typeorm';
import { Survey } from './entity/survey.entity';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { json } from 'express';

@EntityRepository(Survey)
export class SurveyRepository extends Repository<Survey> {

  createSurvey = async (createSurveyDto:CreateSurveyDto) => {
      const {name} = createSurveyDto
      const survey = new Survey()
    try{
        survey.name = name
        await survey.save()
        return {
            status:201,
            name:name,
            message:"successfully created survey"
        }
    }
    catch(err){
        console.log("cant create survey!!",err)
    }

  };
}