import React, { useState, useEffect } from 'react';
import { Container, Message } from './styles';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FaTrashAlt } from 'react-icons/fa';

interface IMessage {
  id: number;
  content: string;
  user: {
    id: number,
    email: string;
  };
}

const DELETE_MESSAGE = gql`
  mutation($id: Number!, $userId: Number!){
    deleteMessage(data: {
      id: $id,
      userId: $userId
    }) {
      id
    }
  }
`;

const GET_ALL_MESSAGES = gql`
  query {
    getMessages {
      id
      content
      user {
        id
        email
      }
    }
  }
`;

export default function Board() {
  // const [messages, setMessages] = useState<IMessage[]>([]);
  // const [deleteMessage, { data }] = useMutation(DELETE_MESSAGE);

  const { loading, data } = useQuery<{ getMessages: IMessage[] }>(
    GET_ALL_MESSAGES
  );
  if (loading) return <p>Loading ...</p>;

  // useEffect(() => {
  //   if (data) {
  //     const { deleteMessage } = data;
  //     const { id } = deleteMessage;

  //     console.log(id);
  //   }
  // }, [data]);

  function handleDelete(e: React.MouseEvent, id: number) {
    console.log(id);
    try {
      // deleteMessage({ variables: { id: id, userId: 1 } });
    } catch(error) {
      alert('Erro ao deletar mensagem, tente novamente.');
    }
  }

  return (
    <Container>
      {data?.getMessages.map(item => (
        <Message key={item.id}>
          <p>{item.content}</p>

          <span>{item.user.email}</span>
          <button onClick={(e)  => handleDelete(e, item.id)} type="button">
            <FaTrashAlt size={18} color="#E02041" />
          </button>
        </Message>
      ))}
    </Container>
  );
}