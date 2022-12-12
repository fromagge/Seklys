import React from 'react';
import { FormControl, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';



const schemazos123 = z.object({
  todo: z.string().min(1),
})

type Schema = z.infer<typeof schemazos123>;


function App() {

  // This is not ok!
  const [todos, setTodos] = React.useState<Schema[]>([],);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schemazos123),
  })

  const addToDo = (data : Schema) => {
    setTodos(x => [...x,{...data}]);
    reset();
  };


  const onKeyDownInput = (event: React.KeyboardEvent<HTMLInputElement> ) => 
  {

    if (event.key === 'Enter') {
      handleSubmit(addToDo)    ;
    }
  }

  return (
    <VStack margin={10} justify="center">
      <form onSubmit={handleSubmit(addToDo)}>
        <FormControl>

          <Input id="todo" placeholder='Write your next best idea' onKeyDown={onKeyDownInput}
            {...register("todo", {
              required: true,
            })}
          />
        </FormControl>

      </form>
      <VStack>
      {todos.map(x => (<Text key={x.todo}>{x.todo}</Text>))}
      </VStack>
    </VStack>
  );
}

export default App;
