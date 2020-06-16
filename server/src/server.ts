import express, { response, request } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);




// const users = [
//     'Diego',  //0
//     'Cleiton',  //1
//     'Robson',  //2
//     'Daniel',  //3
//     'Maria'  //4
// ]

// app.get('/users', (request, response) => {
//     console.log('Listagem de usuários');
//     const search = String(request.query.search);

//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

//     //JSON
//     response.json(filteredUsers);
// });

// app.get('/users/:id', (request, response) => {
//     const id = Number(request.params.id);

//     const user = users[id];

//     return response.json(user);
// });

// app.post('/users', (request, response) => {

//     const data = request.body;

//     console.log(data);

//     const user = {
//         name: data.name,
//         email: data.email,
//     };

//     return response.json(user);
// })