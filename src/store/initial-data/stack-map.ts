import { StacksEnum } from '../../consts/stacks.enum';
import { SpecialisationEnum } from '../../consts/specialisation.enum';
import { EngineeringEnum } from '../../consts/engineering.enum';
import { EngineeringTypeEnum } from '../../consts/engineering-type.enum';
import { GeneralEnum } from '../../consts/general.enum';

interface StackMap {
  stack: StacksEnum;
  specialisation: SpecialisationEnum;
  engineering: EngineeringEnum;
  engineeringType: EngineeringTypeEnum;
// WTF?
// WFT2?
  softEngGeneral: {
    jsCap: GeneralEnum,
    backEndCap: {
      dataBases: string;
      backEnd: string;
    }
  };


  softDeploy: {
    jsCap: string;
    backEndCap: string;

  };
  qa: string;
  softDesign: string;
  sdlc: string;
}


export const STACK_MAP_DATA = [
  {}
]
