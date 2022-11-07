import { Competency } from '../../interfaces/competency';

export const STACKS_DATA: Competency[] = [
  {
    name: 'Software Engineering (Specialization)',
    description: 'Core technology stack to develop product increments',
    modules: [
      {
        name: 'JS Software Engineering',
        competency: 'Software Engineering (Specialization)',
        sections: [
          {
            name: 'JavaScript',
            qualificationsTitle: '(Knowledge, Skills, Methods and Tools and Capabilities)',
            qualifications: [
              'Closure',
              'Lexical environment',
              'Hoisting',
              'Data types',
              'Scope',
              'Event Loop',
              'Timers',
              'Micro/Macro tasks',
              'Queue',
              'Stack',
            ],
          },
          {
            name: 'ES Specs',
            qualifications: [
              'let/const',
              'Arrow functions',
              'Promises',
              'Classes',
              'Generators',
            ],
          },
          {
            name: 'Typescript',
            qualifications: [
              'Compilation',
              'Pro/Cons',
              'Types',
              'Enums',
            ],
          },
          {
            name: 'Packaging',
            qualifications: [
              'dependencies management',
              'npm',
              'yarn',
            ],
          },
        ],
      },
      {
        name: 'FrontEnd Software Engineering',
        competency: 'Software Engineering (Specialization)',
        sections: [
          {
            name: 'HTML',
            qualifications: [
              'Semantic Layout',
              'DOM (repaint/reflow/etc)',
              'Responsive Web Design',
              'SVG & Graphics',
            ],
          },
          {
            name: 'CSS',
            qualifications: [
              'CSS Specs',
              'Specificity',
              'Cascade',
              'Centering',
              'Mixins',
              'Variables',
              'BEM',
              'Atomic',
              'JSS',
              'OOCSS',
            ],
          },
          {
            name: 'Web API',
            qualifications: [
              'DOM',
              'BOM',
            ],
          },
          {
            name: 'Browsers',
            qualifications: [
              'Engines (V8)',
              'Performance',
              'Security',
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Software Engineering (General)',
    description: 'Technologies and tooling, common to all software engineering domains(web development, server, cloud, embedded)',
    modules: [
      {
        name: 'General Software Engineering',
        competency: 'Software Engineering (General)',
        sections: [
          {
            name: 'Service-to-service communication',
            qualificationsTitle: '(Knowledge, Skills, Methods and Tools and Capabilities)',
            qualifications: [
              'REST',
              'WebSocket',
              'Exceptions',
              'Bearer token',
              'GraphQL',
            ],
          },
          {
            name: 'Authentication & Authorization',
            qualificationsTitle: '(Knowledge, Skills, Methods and Tools and Capabilities)',
            qualifications: [
              'JWT',
              'OAuth2/Custom Auth',
              'OpenId',
            ],
          },
        ],
      },
    ],
  },
];
