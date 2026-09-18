export default function Practice1( props ){
  const data = [
    { name: 'Hedy Lamarr', imageUrl: 'https://i.pravatar.cc/150?img=47' },
    { name: 'Grace Hopper', imageUrl: 'https://i.pravatar.cc/150?img=48' },
    { name: 'Ada Lovelace', imageUrl: 'https://i.pravatar.cc/150?img=49' },
    { name: 'Margaret Hamilton', imageUrl: 'https://i.pravatar.cc/150?img=50' }
  ];

  return (<> 
        <Profile></Profile>
  </>)
} // func end 

function Profile( props ) { 
    const dataList = props.data;
    const list = [];
    for (let i = 0 ; i<=dataList.length-1; i++ ){
        list.push(
            <li key={i}>{dataList[i]}</li>
        )
    }
  return (<>
  </> );
} // func end 