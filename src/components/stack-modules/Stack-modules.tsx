import { ExpansionPanel } from '../expansion-panel/Expansion-panel';
import { useAppSelector } from '../../store/hooks';
import { selectStacks } from '../../store/reducers/Stack.reducer';
import './Stack-modules.scss';

export function StackModules() {
  const stacks = useAppSelector(selectStacks);
  return (
    <div>
      <h1>Stack Modules</h1>

      <div className="stack-modules">
        {stacks.map((stack) => (
          <ExpansionPanel key={stack.name} stack={stack}></ExpansionPanel>
        ))}
      </div>
    </div>
  );
}
