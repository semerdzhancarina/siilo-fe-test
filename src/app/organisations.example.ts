export interface Item {
  id: number;
  title: string;
  placeholder: string;
  value: string;
}

export const organisations_exmaple = [
  { name: 'Google',
    id: 1,
    items: [
      {
        id: 1,
        title: 'Name',
        placeholder: 'Google name',
        value: ''
      },
      {
        id: 2,
        title: 'Age',
        placeholder: 'Google age',
        value: '30'
      },
      {
        id: 3,
        title: 'Gender',
        placeholder: 'Google gender',
        value: 'male',
      }
    ]
  },
  { name: 'Facebook',
    id: 2,
    items: [
      {
        id: 1,
        title: 'Name',
        placeholder: 'Facebook name',
        value: ''
      },
      {
        id: 4,
        title: 'Age',
        placeholder: 'Facebook age',
        value: ''
      },
      {
        id: 7,
        title: 'Gender',
        placeholder: 'Facebook gender',
        value: 'female',
      }
    ]
  },
];
