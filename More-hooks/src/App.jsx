import { useRef } from 'react';
import './App.css';
import TaskList from './MoreHook';

const ScrollToTopButton = () => {
  const inputRef = useRef();


  return (
    <div>
      <TaskList></TaskList>
    </div>
  );
};

export default ScrollToTopButton;