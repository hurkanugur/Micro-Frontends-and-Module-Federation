import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private renderer: Renderer2;
    private currentTheme: string | undefined;

    constructor(private rendererFactory: RendererFactory2) {
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }

    switchTheme(themeType: string) {
        this.renderer.removeClass(document.documentElement, this.currentTheme!);
        this.renderer.addClass(document.documentElement, themeType);
        this.currentTheme = themeType;
    }
}
