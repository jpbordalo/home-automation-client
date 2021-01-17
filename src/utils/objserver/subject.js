class Subject {
    /**
     * handlers: {
     *   successFn: Function
     *   errorFn: Function
     * }
     */
    handlers = [];

    subscribe(successFn, errorFn) {
        const fn = {
            successFn,
            errorFn
        }
        this.handlers.push(fn);
        return this;
    }

    unsubscribe(successFn) {
        this.handlers = this.handlers.filter(
            (item) => {
                if (item !== successFn) {
                    return item;
                }
            }
        );
    }

    emit(value) {
        this.handlers.forEach((fns) => fns.successFn(value));
    }

    error(value) {
        this.handlers.forEach((fns) => {
            if (fns.errorFn) {
                fns.errorFn(value);
            }
        });
    }
}

export default Subject;