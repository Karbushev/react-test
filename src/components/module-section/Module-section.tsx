import { ReactElement, useState } from 'react';
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from 'react-icons/io5';
import { CompetencyModule } from '../../interfaces/competency-module';
import './Module-section.scss';

export function ModuleSection(props: { module: CompetencyModule }): ReactElement {
  let [isModulesShown, showModules] = useState(false);

  return (
    <div className="module-section">
      <div className="module-section__header" onClick={() => showModules(!isModulesShown)}>
        <div>{props.module.name}</div>
        {isModulesShown ? <IoChevronForwardCircleOutline></IoChevronForwardCircleOutline> :
          <IoChevronBackCircleOutline></IoChevronBackCircleOutline>}
      </div>

      {isModulesShown && <div className="module-section__sub-content">
        {
          props.module.sections?.map((section) =>
            <div key={section.name}>
              {section.name}
            </div>)
        }
      </div>
      }
    </div>
  )
}
