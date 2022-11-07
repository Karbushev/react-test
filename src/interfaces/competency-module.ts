import { ModuleSection } from './module-section';

export interface CompetencyModule {
  name: string;
  competency: string;
  sections: ModuleSection[];
}
