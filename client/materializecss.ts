interface _Materialize {

    toast(message: string,
        displayLength?: number,
        className?: string,
        completeCallback?: () => void);

}

declare var Materialize: _Materialize;
export var materialize = Materialize;