'use strict';
import { CreateTable } from "../utils/createTable.js";
export class Service {
    createTable ( data ) {

        const createTable = new CreateTable ( );
        const result = createTable.init ( data );
        return result;

    };

    incrementRows ( data, indexIni ) {

        const createTable = new CreateTable ( );
        const result = createTable.incrementRows ( data, indexIni );
        return result;

    };

    processDatas ( datas ) {

        function insertAtBeginning ( obj, key, value ) {

            const newObj = { [key]: value };
            
            for ( const prop in obj ) {
        
                newObj [ prop ] = obj [ prop ];
        
            };
        
            return newObj;
        
        };
        
        const oldObjs = datas;
        const newObjs = [ ];
        
        for ( let i = 0; i < oldObjs.length; i++ ) {
        
            const updatedObj = insertAtBeginning ( oldObjs [ i ], 'item', i + 1 );
            newObjs.push ( updatedObj );
        
        };

        return newObjs;

    };

};