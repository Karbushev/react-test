import { ModalsEnum } from './modals.enum';
import { AddModule } from '../components/add-module/Add-module';
import { AddStack } from '../components/add-stack/Add-stack';
import { ReactElement } from 'react';

export const MODALS: {[key in ModalsEnum]: ReactElement} = {
  [ModalsEnum.AddModal]: <AddModule/>,
  [ModalsEnum.AddStack]: <AddStack/>,
}
