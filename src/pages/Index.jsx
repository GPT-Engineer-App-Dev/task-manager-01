import { useState } from 'react';
import { Box, Button, Input, List, ListItem, ListIcon, IconButton } from '@chakra-ui/react';
import { FaTrash, FaCheck } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: input, isCompleted: false }]);
      setInput('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  return (
    <Box p={5}>
      <Input
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <Button onClick={handleAddTask} ml={2} colorScheme="blue">Add Task</Button>
      <List spacing={3} mt={4}>
        {tasks.map(task => (
          <ListItem key={task.id} d="flex" alignItems="center">
            <ListIcon as={task.isCompleted ? FaCheck : FaTrash} color={task.isCompleted ? 'green.500' : 'red.500'} cursor="pointer" onClick={() => handleToggleComplete(task.id)} />
            <Box flex="1" as="span" textDecoration={task.isCompleted ? 'line-through' : 'none'}>
              {task.text}
            </Box>
            <IconButton aria-label="Delete task" icon={<FaTrash />} onClick={() => handleDeleteTask(task.id)} />
          </ListItem>
        ))}
      </List>
      <Box as="footer" p={4} textAlign="center" borderTop="1px" borderColor="gray.200">
        © 2023 Todo App. All rights reserved.
      </Box>
    </Box>
  );
};

export default Index;