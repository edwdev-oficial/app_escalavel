'use strict';

export class ModuleTwoView {

    #table = document.querySelector ( '.table' );

    constructor ( ) {


    };

    configureOnScroll ( fn, method, data ) {

        let lastScrollPosition = this.#table.scrollTop;

        this.#table.onscroll = ( e ) => {

            const currentScrollPosition = e.target.scrollTop 
            
            if ( currentScrollPosition > lastScrollPosition ) {
                
                let rows = this.#table.querySelector ( 'tbody' ).rows.length;
                const incrementRows = 10;
                const indexIni = rows < data.length ? rows + 1 : '';
                
                if ( indexIni ) {
                    
                    const parcialData = data.slice (indexIni - 1).slice(0, incrementRows);
                    
                    fn ( method, parcialData, indexIni, true );

                };                

                
                lastScrollPosition = currentScrollPosition;
                
            };
            

        };        

    };

    renderDatas ( html ) {

        this.#table.insertAdjacentHTML ( 'beforeend', html );

    };

    incrementRows ( rows ) {

        this.#table.querySelector ( 'tbody' ).insertAdjacentHTML ( 'beforeend', rows );

    };

};