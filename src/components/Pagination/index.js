import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdKeyboardArrowLeft as ArrowLeft,
  MdKeyboardArrowRight as ArrowRight,
} from 'react-icons/md';

import { Container } from './styles';

function Pagination({ module, update }) {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state[module].currentPage);
  const totalPages = useSelector((state) => state[module].totalPages);

  function prevPage(page) {
    if (page === 0) return;

    dispatch(update(page));
  }

  function nextPage(page) {
    if (page > totalPages) return;

    dispatch(update(page));
  }

  return (
    <Container>
      <div>
        <ArrowLeft
          size={30}
          color="#222"
          onClick={() => prevPage(currentPage - 1)}
        />

        <span>
          Página {currentPage} de {totalPages}
        </span>

        <ArrowRight
          size={30}
          color="#222"
          onClick={() => nextPage(currentPage + 1)}
        />
      </div>
    </Container>
  );
}

export default Pagination;
