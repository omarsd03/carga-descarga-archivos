function subirArchivo() {
    
    let formData = new FormData();
    let jsonData = { nombre: 'Omar', apellido: 'Salgado' };
    
    const inputFile = document.querySelector("#inputArchivo");
    console.log(inputFile.files[0]);
    formData.append("archivo", inputFile.files[0]);
    formData.append('subirArchivo', JSON.stringify(jsonData));

    fetch("server/request.php", {
        method: 'POST',
        body: formData,
    })
    .then(respuesta => respuesta.text())
    .then(resp => {
        console.log(resp);
        $('#frameArchivo').attr('ruta', `server/${inputFile.files[0].name}`);
        let ruta = $('#frameArchivo').attr('ruta');
        $('#btnDescargarArchivo').attr('download');
        $('#btnDescargarArchivo').attr('href', ruta);
    });

}