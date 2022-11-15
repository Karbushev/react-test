import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectStacks } from '../../store/reducers/Stack.reducer';

export function StackMap() {
  const stacks = useAppSelector(selectStacks);
  const columns = [
    { title: 'Stack', key: 'name' },
  ];


  return (
    <div className="stack-map">
      <table>
        <thead>
        <th>
          {
            columns.map((column) => (
              <td>{[column.key]}</td>
            ))
          }
        </th>
        </thead>
        <tbody>
        <tr>
          {stacks.map((stack) => (
            <td>{stack.name}</td>
          ))}
        </tr>
        </tbody>
      </table>
    </div>
  );
}
