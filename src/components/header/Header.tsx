import { SlPlus } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import React from 'react';
import { openModal } from '../../store/reducers/Modal.reducer';
import './Header.scss';
import { useAppDispatch } from '../../store/hooks';
import { ModalsEnum } from '../../consts/modals.enum';

export function Header() {
  const dispatch = useAppDispatch();

  function handleAddStack() {
    dispatch(openModal(ModalsEnum.AddStack));
  }

  function handleAddModule() {
    dispatch(openModal(ModalsEnum.AddModal));
  }

  return (
    <header className="header">
      <h1>
        JS Tech Stack
      </h1>
      <div className="header__navigation">
        <button className="app__button" onClick={handleAddStack}><SlPlus className="app__icon-button"></SlPlus> Add
          Stack
        </button>
        <button className="app__button" onClick={handleAddModule}><SlPlus className="app__icon-button"></SlPlus>Add
          Module
        </button>
        <Link to="/">
          <button className="app__button">Stack Map</button>
        </Link>
        <Link to="/modules">
          <button className="app__button">Stack Modules</button>
        </Link>
      </div>
    </header>
  )
}
