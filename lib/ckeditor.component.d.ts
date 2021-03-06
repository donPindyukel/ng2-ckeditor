import { EventEmitter, NgZone, QueryList, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { CKButtonDirective } from "./ckbutton.directive";
import { CKGroupDirective } from "./ckgroup.directive";
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
export declare class CKEditorComponent implements AfterViewInit, OnChanges {
    config: any;
    debounce: string;
    readonly: boolean;
    change: EventEmitter<{}>;
    ready: EventEmitter<{}>;
    blur: EventEmitter<{}>;
    focus: EventEmitter<{}>;
    host: any;
    toolbarButtons: QueryList<CKButtonDirective>;
    toolbarGroups: QueryList<CKGroupDirective>;
    _value: string;
    instance: any;
    debounceTimeout: any;
    zone: NgZone;
    /**
     * Constructor
     */
    constructor(zone: NgZone);
    value: any;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * On component destroy
     */
    ngOnDestroy(): void;
    /**
     * On component view init
     */
    ngAfterViewInit(): void;
    /**
     * Value update process
     */
    updateValue(value: any): void;
    /**
     * CKEditor init
     */
    ckeditorInit(config: any): void;
    /**
     * Implements ControlValueAccessor
     */
    writeValue(value: any): void;
    onChange(_: any): void;
    onTouched(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
