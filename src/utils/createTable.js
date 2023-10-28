'use strict';

export class CreateTable {

    static fields = null;

    constructor ( ) {

    };

    static setFields ( fields ) {

        this.fields = fields;

    };

    static getFields ( ) {

        return this.fields;

    };

    init ( data ) {

        data [ 1 ][ 'name' ] = 'Juin';
        
        const allkeys = [ 'item' ];

        let table = null;
        let thead = null;
        let thRow = null;
        let ths = '';
        let tbody = null;
        let tbRows = '';

        for ( let i = 0; i < data.length; i++ ) {

            const keys = Object.keys ( data [ i ] );
            allkeys.push ( ...keys )

        };

        CreateTable.setFields (Array.from ( new Set ( allkeys ) ).filter( el => el !== '_id' ) );

        const fields = CreateTable.getFields ( );

        for ( let i = 0; i < fields.length; i++  ) {
            
            ths += `<th>${ fields [ i ] }</th>`

        };

        for ( let i = 0; i < 50 && i < data.length; i ++ ) {
            
            let tds = '';

            for ( let key = 0; key < fields.length; key ++ ) {
                
                const field = fields [ key ];
                const value = field === 'item' ? i + 1 : data [ i ][ field ]; 
                const td = value ? `<td>${value}</td>` : `<td></td>`;
                tds += td;
            
            };

            tbRows += `<tr id="${data [i]._id}">${tds}</tr>`;

        };

        thRow = `<tr>${ths}</tr>`
        thead = `<thead>${thRow}</thead>`
        tbody = `<tbody>${tbRows}</tbody>`
        table = `<table>${thead}${tbody}</table>`

        return table;

    };

    incrementRows ( data, indexItem ) {

        const fields = CreateTable.getFields ( );
        
        let tbRows = '';

        for ( let i = 0; i < data.length; i++ ) {

            let tds = '';

            for ( let key = 0; key < fields.length; key ++ ) {
            
                const field = fields [ key ];

                const value = field === 'item' ? indexItem : data [ i ][ field ]; 

                const td = value ? `<td>${value}</td>` : `<td></td>`;

                tds += td;

            };

            indexItem++;

            tbRows += `<tr id="${data[i]._id}">${tds}</tr>`;
        };

        return tbRows;

    };

};