'use strict';

export class ModuleOneModel {

    async getDatas ( configLocal ) {

        // if don't have connection with database, use choices one or two
        const choices = [ 'jsonplaceholder', 'assets', 'dbLocal', 'dbAtlas' ];

        const choose = configLocal ( choices [ 0 ] );
        
        const response = await fetch ( choose.url, {
            
            method: choose.method,
        
            body: JSON.stringify ( choose.db ),
        
        } );
        
        return response.json ( );

    };

};