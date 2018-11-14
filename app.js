const express = require('express');
const bs = require('body-parser');

const RS = require('./components/request/service');
const AppConfigs = require('./components/settings/configs');

const app = express();

app.use(bs.json());
app.use(bs.urlencoded({extended: false}));
app.use(RS.parseQuery);

const UsersRouter = require('./components/users/api');
app.use('/users', UsersRouter);

app.listen(AppConfigs.PORT);

Object.defineProperty(Object.prototype, 'getOnly', {
    value: function () {
        if (Array.isArray(this)) {
            var arr = [], args = arguments;

            this.forEach(function (el) {
                var obj = {};

                [].filter.call(args, function (k) {
                    if (typeof k == 'function') {
                        obj[k.name] = k.call(el);
                    } else {
                        obj[k] = el[k];
                    }
                });

                arr.push(obj);
            });

            return arr;
        } else if (this) {
            var obj = {}, el = this;

            [].filter.call(arguments, function (k) {
                if (typeof k == 'function') {
                    obj[k.name] = k.call(el);
                } else {
                    obj[k] = el[k];
                }
            });

            return obj;
        }

        return this;
    },
    writable: true,
    configurable: true,
    enumerable: false
});
