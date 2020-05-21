import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdKeyboardArrowLeft as ArrowLeft,
  MdKeyboardArrowRight as ArrowRight,
} from 'react-icons/md';
import { updatePageRequest } from '../../store/modules/pagination/actions';
import { Container } from './styles';

function Pagination({ module }) {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state[module].currentPage);
  const totalPages = useSelector((state) => state[module].totalPages);

  function prevPage(page) {
    console.tron.log(page);
    if (page === 0) return;

    dispatch(updatePageRequest(page));
  }

  function nextPage(page) {
    console.tron.log(page);
    if (page > totalPages) return;

    dispatch(updatePageRequest(page));
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
