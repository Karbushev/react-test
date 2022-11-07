import { CompetencyModule } from './competency-module';

export interface Competency {
  name: string;
  description?: string;
  areasDescription?: string;
  modules: CompetencyModule[];
}
