import {HtmlWrapper,Text,Field,FieldItem,Button} from "../../styles/Registration";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(0);

    const handleLogin = async () => {
        // Отправка данных на сервер для проверки
        const response = await fetch("http://localhost:3001/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        setLoginStatus(response.status)//статус запроса
    };

    return (
        <HtmlWrapper>
            <Text>Login</Text>
            <Field>
                <FieldItem type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></FieldItem>
                <FieldItem type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></FieldItem>
                <Button onClick={handleLogin}>Авторизироваться</Button>
                <Button><Link to="/" style={{"textDecoration":"none","color":"black"}}>Зарегистрироваться</Link></Button>
            </Field>
            <Text style={{"fontSize":"20px"}}>{
                loginStatus === 200
                ? "Вы успешно авторизировались"
                : loginStatus === 401
                ? "Проверьте вводимые данные"
                : loginStatus === 422
                ? "Заполните все поля для авторизации"
                : ""
            }</Text>
        </HtmlWrapper>
    );
}

export default Login;
