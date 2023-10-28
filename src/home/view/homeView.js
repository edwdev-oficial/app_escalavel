'use strict';

export class HomeView {

    #main = document.querySelector ( 'main' );
    #nav = document.querySelector ( 'nav' );
    #content = document.querySelector ( '.content' );

    constructor ( ) {

    };

    init ( fn ) {

        Array.from ( this.#nav.querySelectorAll ( 'button' ) ).forEach ( button => {

            button.onclick = ( ) => {

                fn ( button.id )

            };

        } );

    };

    async loadComponent ( nameComponent ) {

        this.#content.innerHTML = '';

        const pathComponent = `./src/${nameComponent}/view/${nameComponent}Component.html`;
        const component = await fetch ( pathComponent );
        const html = await component.text ( );
        this.#content.insertAdjacentHTML ( 'beforeend',  html );

    };

    async loadController ( nameComponent ) {

        // const worker = new Worker ( '../../worker/worker.js', { type: 'module' } );
        const worker = new Worker ( './src/worker/worker.js', { type: 'module' } );

        const pathController = `../../${nameComponent}/controller/${nameComponent}Controller.js`;
        
        const module = await import ( `${pathController}` );

        module[`${nameComponent}Controller`].init( worker );

    };
    
};