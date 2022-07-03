import Card from "../../components/Card";

type AllBoardsPageProps = {

};

const AllBoardsPage = ({

}: AllBoardsPageProps) => {
  const users = [
    { avatar: '', name: 'Lucas' },
    { avatar: 'https://cataas.com/cat', name: 'Adriana Domingues' },
    { avatar: 'https://cataas.com/cat', name: 'Catarina Domingues' },
  ];
  const boards = [
    { title: 'Testing 1', image: 'https://cataas.com/cat', tags: ['Testing', 'Design'], users: [...users, { name: 'Teste' }] },
    { title: 'Testing 2', image: 'https://cataas.com/cat', tags: ['Issue', 'Build'], users },
    { title: 'Testing 3', image: 'https://cataas.com/cat', tags: ['Bug', 'Component'], users },
    { title: 'Testing 4', image: 'https://cataas.com/cat', tags: ['Feature', 'Component'], users },
    { title: 'Testing 4', image: 'https://cataas.com/cat', tags: ['Feature', 'Component'], users },
    { title: 'Testing 4', image: 'https://cataas.com/cat', tags: ['Feature', 'Component'], users },
    { title: 'Testing 4', image: 'https://cataas.com/cat', tags: ['Feature', 'Component'], users },
    { title: 'Testing 4', image: 'https://cataas.com/cat', tags: ['Feature', 'Component'], users },
    { title: 'Testing 4', image: 'https://cataas.com/cat', tags: ['Feature', 'Component'], users },
    { title: 'Testing 4', image: 'https://cataas.com/cat', tags: ['Feature', 'Component'], users },
  ];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '0 auto',
        gap: '42px',
        rowGap: '42px',
        width: '1098px',
        padding: '60px 0',
      }}
    >
      {boards.map(board => (
        <Card
          {...board}
        />
      ))}
    </div>
  )
}

export default AllBoardsPage
