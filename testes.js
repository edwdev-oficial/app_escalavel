'use strict';

export class Config {

    local ( choice ) {

        const local = {

            assets: { url: '../../../assets/newDataJson.json', method: 'GET' },
            dbLocal: { url: 'http://127.0.0.1:3005/home/list', method: 'POST', db: { source: 'clientLocal', db: 'newContFin', collection: 'contasPagar' } },
            dbAtlas: { url: 'http://127.0.0.1:3005/home/list', method: 'POST', db: { source: 'clientAtlas', db: 'controlFinance', collection: 'customers' } }

        }

        return local[choice];

    };

};

const runFetch = ( choice ) => {

    const local = new Config ( );

    const choices = [ 'assets', 'dbLocal', 'dbAtlas' ];
    
    const choose = local.local ( choices [ choice ] );
    
    fetch ( choose.url, {
        method: choose.method,
        body: JSON.stringify ( choose.db ),
    } )
    .then ( response => response.json ( ) )
    .then ( dbdata => {
    
        console.log ( dbdata );
    
    } );

};


( ( ciclos, counter, choice ) => {
    
    const interval = setInterval( ( ) => {
        
        runFetch ( choice )

        choice === 2 ? choice = 0 : choice ++;
        
        counter ++;

        if ( counter === ciclos * 3 ) {

            clearInterval ( interval );

        };
    
    }, 1000 );

} ) //( 4, 0, 0 )
