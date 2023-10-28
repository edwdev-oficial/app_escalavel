'use strict';
import { HomeView } from '../view/homeView.js';

export class HomeController {

    constructor ( ) {

        this.view = new HomeView ( );

    };

    static init ( ) {
        const controller = new HomeController ( );
        controller.init ( );
    };

    init ( ) {
        this.view.init ( this.loadComponet.bind ( this ) );
    };

    async loadComponet ( pathComponent ) {

        await this.view.loadComponent ( pathComponent );
        this.loadController ( pathComponent );

    };

    loadController ( pathController ) {

        this.view.loadController ( pathController );

    };

};