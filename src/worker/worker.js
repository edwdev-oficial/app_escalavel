'use strict';
import { Service } from "./service.js";
const service = new Service ( );
self.onmessage = ( { data } ) => {

    const { method, datas, indexIni } = data.props;

    const result = service [ method ] ( datas, indexIni );

    self.postMessage ( { method, result } );

};
