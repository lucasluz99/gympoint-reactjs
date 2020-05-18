import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Alert = {
  async delete() {
    return MySwal.fire({
      title: 'Você confirma a remoção?',
      text: 'O registro será removido permanentemente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, confirmo a exclusão',
      cancelButtonText: 'Não',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      focusCancel: true,
      reverseButtons: true,
    });
  },
  async alert() {
    return MySwal.fire({
      title: 'Este usuário não pode ser removido',
      text:
        'Ele ainda possui uma matŕicula ativa,primeiro delete sua matrícula',
      icon: 'warning',

      confirmButtonText: 'Ok',

      confirmButtonColor: '#28a745',
    });
  },
};

export default Alert;
