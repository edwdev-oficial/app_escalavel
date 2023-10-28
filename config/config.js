'use strict';

export class Config {

    local ( choice ) {

        const local = {

            jsonplaceholder: { url: 'https://jsonplaceholder.typicode.com/comments', method: 'GET' },
            assets: { url: '../../../assets/newDataJson.json', method: 'GET' },
            dbLocal: { url: 'http://127.0.0.1:3005/home/list', method: 'POST', db: { source: 'clientLocal', db: 'newContFin', collection: 'contasPagar' } },
            dbAtlas: { url: 'http://127.0.0.1:3005/home/list', method: 'POST', db: { source: 'clientAtlas', db: 'controlFinance', collection: 'customers' } }

        }

        return local[choice];

    };

};

