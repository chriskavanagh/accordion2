const data = [
  {
    id: 0,
    label: "Cool Label",
    renderContent: () => (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    ),
  },
  {
    id: 1,
    label: "Twitter Label",
    renderContent: () => (
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
        <li>List Item 4</li>
      </ul>
    ),
  },
  {
    id: 2,
    label: "Instagram Label",
    renderContent: () => <button>I am a Button!</button>,
  },
];
