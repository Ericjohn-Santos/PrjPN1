/**
 * Validações na página quanto ao seu preenchimento
 */
 $(function () {
    //Esconde os campos do responsável pelo menor de idade
    $('#div-nome-responsavel').hide();
    $('#div-cpf-responsavel').hide();
    //Próxima aba
    $('#proximo').on('click',function () {
      $('#autorizacao-tab').trigger('click');
    });
    //Menor de idade (VALIDAR COM A DATA DO SERVIDOR)
    $('#dataNascimento').on('blur',function () {
      let d = new Date();
      let nA = $('#dataNascimento').val().split("-");
      let n = new Date(nA[1] + '-' + nA[2] + '-' + nA[0]);
      let ano = d.getFullYear() - n.getFullYear();
      let m = d.getMonth() - n.getMonth();
      if (m < 0 || (m === 0 && d.getDate() < n.getDate())) {
        ano--;
      }
      //mostra campos caso seja menor de idade
      if (ano < 18) {
        $('#div-nome-responsavel').show();
        $('#div-cpf-responsavel').show();
      } else {
        $('#div-nome-responsavel').hide();
        $('#div-cpf-responsavel').hide();
      }
    });
  });
  
  /**
   * Validações no formulário HTML para garantir integridade antes da submissão do formulario
   */
  function validarFormulario(){
    //inserir as validações aqui e SE estiver tudo ok, chama a função de upload. 
    //Isso para garantir que o upload só acontecerá após o preenchimento de todo o formulário.
    let validacaoOK = true;
    if (validacaoOK){
      uploadFile();
      return true;
    }
    return false;
  }
  
  /**
   * Função assíncrona com AJAX para realizar upload do arquivo (foto)
   */
  function uploadFile() {
    //let arquivo = $(nomeFoto).val().split(/(\\|\/)/g).pop();
    $('#nomeFoto').clone().appendTo("#fileForm");
  
    let myForm = document.getElementById('fileForm');
    let formDataFile = new FormData(myForm);
  
    $.ajax({
      url: '/uploadFoto', // Url do lado server que vai receber o arquivo
      data: formDataFile,
      processData: false,
      contentType: false,
      type: 'POST',
      success: function (data) {
        //retorno ao usuário depois da resposta do servidor
      }
    });
  }