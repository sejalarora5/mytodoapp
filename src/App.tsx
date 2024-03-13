import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardContainer from './components/CardContainer/CardContainer';
import Home from './pages/Home/Home';
import NavigationMenu from './components/Navbar/NavigationMenu';
import About from './pages/About/About';
import { Provider } from 'react-redux';
import TodoList from './pages/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import { persistor, store } from './redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  const Layout = ({ children }: any) => {
    return (
      <div>
        <NavigationMenu />
        <main>{children}</main>
      </div>
    );
  };
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/todolist' element={<TodoList />} />
              <Route path='/todoform' element={<TodoForm />} />
              <Route path='/cardContainer' element={<CardContainer />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
// Implement a form component named TodoForm with inputs for title and description.
// Manage form state using React's useState hook.
// Create a parent component named TodoList that manages a list of todos.
// Lift the state of todos from TodoForm to TodoList and pass todos as props to TodoForm and CardContainer.
// Create routes for the home page, about page, and a dynamic route for individual todo items.
// Set up Redux in your application using Redux Toolkit.
// Create a slice for managing todo state, including actions and reducers for adding, deleting, and updating todos
// Connect TodoList component to Redux store using useSelector and useDispatch hooks.
// Dispatch actions to add, delete, and update todos from the TodoList component.
// Use CSS modules or styled-components to style your components.
// Ensure responsive design and accessibility considerations.
// Implement Additional Features:
// Add functionality to mark todos as completed.
// Implement search and filter functionality for todos.