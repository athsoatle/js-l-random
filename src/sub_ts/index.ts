type funcArr = Array<Function>;
type SubMap = Map<object, funcArr>;

class Emitter {
    private eventMap: Map<string, SubMap>;

    constructor() {
        this.eventMap = new Map();
    }

    on(event: string, subscriber: object, handler: Function): this {
        if (!this.eventMap.has(event)) {
            this.eventMap.set(
                event,
                new Map([[subscriber, new Array()]]));
        }
        let subMap: SubMap | undefined = this.eventMap.get(event);
        if (!subMap?.has(subscriber)) subMap?.set(subscriber, []);
        subMap?.set(subscriber, [...subMap.get(subscriber)!, handler.bind(subscriber)]);
        return this;
    }

    off(event: string, subscriber: object): this {
        if (this.eventMap.has(event) && this.eventMap.get(event)?.has(subscriber)) {
            this.eventMap.get(event)?.delete(subscriber);
        }
        return this;
    }

    emit(event: string): Emitter {
        if (this.eventMap.has(event)) {
            [...this.eventMap.get(event)!.values()].forEach((v) => v.forEach((v2) => v2()));
        }
        return this;
    }
}

export let emitter = new Emitter();