"use strict";

import 'reflect-metadata'
import * as core from 'angular2/core';
import * as router from 'angular2/router';
import * as compiler from 'angular2/compiler';
import * as html_parser from 'angular2/src/compiler/html_parser'

@core.Injectable()
class Engine {
}

@core.Injectable()
class Car {
    constructor(public engine: Engine, public c: compiler.TemplateCompiler) { }
}

class XhrImpl implements compiler.XHR {

    get(url: string) {
        return new Promise<string>((resolve, reject) => {
            resolve(url);
        });
    }
}

try {
    var injector = core.Injector.resolveAndCreate(
        [
            Car,
            Engine,
            compiler.COMPILER_PROVIDERS,
            core.DirectiveResolver,
            core.ViewResolver,
            new core.Provider(compiler.XHR, { useClass: XhrImpl }),
            core.PLATFORM_COMMON_PROVIDERS
        ]);
    var c: html_parser.HtmlParser = injector.get(html_parser.HtmlParser);

    var html = c.parse(`
    <p>
        sample
        <my-app />
    </p>
    
    `, 'test.html');

    html.rootNodes[1].visit({
        visitElement(ast: any, context: any): any {
            console.log(ast,context);
            return true;
        },
        visitAttr(ast: any, context: any): any {
            console.log(ast,context);
            return true;
        },
        visitText(ast: any, context: any): any {
            console.log(ast,context);
            return true;
        }
    }, {});

} catch (e) {
    console.log(e.message);
    console.log(e.stacktrace);
}
