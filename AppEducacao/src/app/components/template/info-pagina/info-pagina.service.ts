import { HeaderData as InfoPaginaData } from './info-pagina-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InfoPaginaService {

    private _infoPaginaData = new BehaviorSubject<InfoPaginaData>({
        title: '',
        icon: ''
    })

    constructor() { }

    get headerData(): InfoPaginaData {
        return this._infoPaginaData.value;
    }

    set headerData(headerData: InfoPaginaData) {
        this._infoPaginaData.next(headerData);
    }
}