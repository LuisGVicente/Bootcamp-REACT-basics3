
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import { users } from '../../shared/data/users';



export default function UsersDetailPage(){

    const {idUser} = useParams();

    const history = useHistory();

    console.log('useRouteMatch', useRouteMatch());
    console.log('useLocation', useLocation());
    console.log('useHistory', useHistory());

    return (
        <div>
        {/* <button onClick={useHistory().goBack}>Go back</button> */}
        <button onClick={() => {history.push('/users')}}>Go back</button>
        {users.map((user,index) => {
            if (user.id === Number(idUser)){//Los params son siempre strings, si los necesitamos como números, tenemos que parsearlos
                return <div key={index}>
                 <p>{user.name}</p>
                 <p>{user.role}</p>
                </div>
                
                
            }else {
                return null
            }
        })}
        </div>
    )
}