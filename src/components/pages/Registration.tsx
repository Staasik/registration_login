import { HtmlWrapper, Text, Field, FieldItem, Button } from "../../styles/Registration";
import { useState } from "react";
import { Link } from "react-router-dom";


function Registration() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registrationStatus, setRegistrationStatus] = useState(0);

    const handleRegistration = async () => { 
        // Отправка данных на сервер (в данном случае, в JSON файл)
        const response = await fetch("http://localhost:3001/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });        
        setRegistrationStatus(response.status)//статус запроса
    };

    return (
        <HtmlWrapper>
            <Text>Registration</Text>
            <Field>
                <FieldItem type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></FieldItem>
                <FieldItem type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></FieldItem>
                <Button onClick={handleRegistration}>Зарегистрироваться</Button>
                <Button><Link to="/login" style={{"textDecoration":"none","color":"black"}}>Авторизироваться</Link></Button>
            </Field>                
            <Text style={{"fontSize":"20px"}}>{
                registrationStatus === 201
                ? "Вы успешно зарегистрировались"
                : registrationStatus === 400
                ? "Пользователь с таким именем уже существует"
                : registrationStatus === 422
                ? "Заполните все поля для регистрации"
                : ""
            }</Text>
        </HtmlWrapper>
    );
}

export default Registration;
