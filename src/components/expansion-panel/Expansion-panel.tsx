import { ReactElement, useState } from 'react';
import {
  IoChevronDownCircleOutline,
  IoChevronUpCircleOutline,
} from 'react-icons/io5';
import './Expansion-panel.scss';
import { Competency } from '../../interfaces/competency';
import { ModuleSection } from '../module-section/Module-section';

export function ExpansionPanel(props: { stack: Competency }): ReactElement {
  let [isExpanded, expandToggle] = useState(false);

  function stackToggle() {
    expandToggle(!isExpanded);
  }

  return (
    <div className="expansion-panel">
      <div className="expansion-panel__header" onClick={() => stackToggle()}>
        <div>{props.stack.name}</div>

        {isExpanded ? <IoChevronUpCircleOutline></IoChevronUpCircleOutline> :
          <IoChevronDownCircleOutline></IoChevronDownCircleOutline>}
      </div>


      {isExpanded &&
        <div className="expansion-panel__content">
          {props.stack.modules.map((module) =>
            <ModuleSection module={module} key={module.name}></ModuleSection>
          )}
        </div>
      }
    </div>
  );
}
