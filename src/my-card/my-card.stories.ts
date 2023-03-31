import "./index";

export default {
  title: "Components/My Card",
  component: "my-card",
  args: {
    title: 'Titolo',
    expanded: true,
    ['--font-size']: '1rem',
    ['--padding']: '0.25rem'
  },
  parameters: {
    actions: {
      handles: ['find']
    }
  }
}

const Template = (args: any) => `
  <style>
    my-card {
      --font-size: ${args['--font-size']};
      --padding: ${args['--padding']};
    }
  </style>
  <my-card title="${args.title}" ${args.expanded ? "expanded" : null}>
    <h1>content here</h1>
  </my-card>
`;

export const Default: any = Template.bind({});
Default.args = {};


