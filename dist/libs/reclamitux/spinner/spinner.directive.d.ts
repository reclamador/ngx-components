/**
 * Copypasted from nebular nbSpinner so we can use our own html
 */
import { ComponentFactoryResolver, ComponentFactory, ComponentRef, ElementRef, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
export declare class SpinnerDirective implements OnInit {
    private directiveView;
    private componentFactoryResolver;
    private renderer;
    private directiveElement;
    private shouldShow;
    isSpinnerExist: boolean;
    message: string;
    color: string;
    opacity: boolean;
    fixed: boolean;
    spinner: boolean;
    spinnerComponent: ComponentRef<SpinnerComponent>;
    componentFactory: ComponentFactory<SpinnerComponent>;
    constructor(directiveView: ViewContainerRef, componentFactoryResolver: ComponentFactoryResolver, renderer: Renderer2, directiveElement: ElementRef);
    ngOnInit(): void;
    hide(): void;
    show(): void;
    setInstanceInputs(instance: SpinnerComponent): void;
}
