interface _Markdown {

    toHTML(markdown: string): string;

}

export var markdown: _Markdown = (<any>window).markdown;