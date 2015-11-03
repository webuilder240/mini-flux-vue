/**
Copyright (c) 2015 azu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
**/

"use strict";
/*
    Simple EventEmitter
 */
export default class EventEmitter {
    constructor() {
        this._handlers = {};
    }

    on(type, handler) {
        if (typeof this._handlers[type] === 'undefined') {
            this._handlers[type] = [];
        }

        this._handlers[type].push(handler);
    }

    emit(type, data) {
        var handlers = this._handlers[type] || [];
        for (var i = 0; i < handlers.length; i++) {
            var handler = handlers[i];
            handler.call(this, data);
        }
    }

    off(type, handler) {
        var handlers = this._handlers[type] || [];
        for (var i = 0; i < handlers.length; i++) {
            var ownHandler = handlers[i];
            if (ownHandler === handler) {
                handlers.splice(i, 1);
            }
        }
    }
}
