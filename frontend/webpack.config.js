const path = require('path');

module.exports = {
    entry: './script.js', // Seu arquivo JavaScript de entrada
    output: {
        filename: 'bundle.js', // Nome do arquivo de saída otimizado
        path: path.resolve(__dirname, 'dist'), // Diretório de saída
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Processar arquivos CSS
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // Processar imagens
                use: ['file-loader'],
            },
        ],
    },
};
