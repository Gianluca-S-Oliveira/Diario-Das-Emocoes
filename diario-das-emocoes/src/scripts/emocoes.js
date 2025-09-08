document.getElementById('emocaoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const emocao = document.querySelector('input[name="emocao"]:checked').value;
    const descricao = this.descricao.value;
    const registro = {
        emocao,
        descricao,
        data: new Date().toISOString()
    };
    let diarios = JSON.parse(localStorage.getItem('diarioEmocoes') || '[]');
    diarios.push(registro);
    localStorage.setItem('diarioEmocoes', JSON.stringify(diarios));
    Swal.fire({
        icon: 'success',
        title: 'Emoção salva!',
        text: 'Seu registro foi adicionado com sucesso.',
        confirmButtonColor: '#ffd600',
        background: '#fffbe6'
    });
    this.reset();
});