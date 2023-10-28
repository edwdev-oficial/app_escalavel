'use strict';

export class ModuleTwoModel {

    async getDatas ( configLocal ) {

        // if don't have connection with database, use choices one or two
        const choices = [ 'jsonplaceholder', 'assets', 'dbLocal', 'dbAtlas' ];

        const choose = configLocal ( choices [ 1 ] );
        
        const response = await fetch ( choose.url, {
            
            method: choose.method,
        
            body: JSON.stringify ( choose.db ),
        
        } );
        
        return response.json ( );

    };

};