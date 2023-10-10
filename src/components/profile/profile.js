import React, {useContext} from "react";
import { UserContext } from "../../contexts/usercontext";


function Profile(){
    const {login} = useContext(UserContext);

    return (
        <div>
            {login ? 'Dados do usuario' : 'Faça o seu login'}
        </div>
    )
}

export default Profile;