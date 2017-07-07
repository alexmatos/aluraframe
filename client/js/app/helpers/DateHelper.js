class DateHelper {
    
    constructor() {
        throw Error("Esta classe não pode ser instanciada");
    }
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {
        if(/\d{4}-\d{2}-\d{2}/.test(texto)) {
            return new Date(...texto.split('-').map( (item, indice) => item - indice % 2));
        }
        throw new Error('Data deve estar no formato yyyy-mm-dd');
    }
}