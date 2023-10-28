'use strict';
import { ModuleTwoView } from "../view/moduleTwoView.js";
import { ModuleTwoModel } from "../model/moduleTwoModel.js";
import { Config } from "../../../config/config.js";

export class ModuleTwoController {



    #worker;
    #events = {

        createTable: ( html ) => {

            this.view.renderDatas ( html );

        },

        incrementRows: ( rows ) => {

            this.view.incrementRows ( rows );

        },

    };

    constructor ( worker ) {

        this.view = new ModuleTwoView ( );
        this.model = new ModuleTwoModel ( );
        this.config = new Config ( );
        this.#worker = this.configureWorker ( worker );

    };

    static init ( worker ) {

        const controller = new ModuleTwoController ( worker );
        controller.init ( );
        
    };
    
    init ( ) {

        this.getDatas ( );
        
    };

    configureWorker ( worker ) {

        worker.onmessage = ( { data } ) => {

            const { method, result } = data;

            this.#events [ method ] ( result );

        };

        return worker;

    };
    
    async getDatas ( ) {

        // console.log ( this.config );

        const datas = await this.model.getDatas ( this.configLocal.bind ( this ) );
        this.processData ( 'createTable', datas, null );
        this.view.configureOnScroll ( this.processData.bind ( this ), 'incrementRows', datas );
        
    };

    configLocal ( choice ) {

        return this.config.local ( choice );

    };
    
    processData ( method, datas, indexIni ) {
        
        this.#worker.postMessage ( { 'props': { method: method, datas: datas, indexIni: indexIni } } );

    };

};