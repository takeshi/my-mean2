interface Markdown {

    toHTML(markdown: string): string;

}

export var markdown: Markdown = (<any>window).markdown;