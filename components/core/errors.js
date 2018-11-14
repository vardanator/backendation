const errors = {
    USER_NOT_FOUND: 'user_not_found',
    PERMISSION_DENIED: 'permission_denied',
    INTERNAL_ERROR: 'internal_error',
    UNKNOWN_ERROR: 'unknown_error'
};

const err_objects = new Map();
err_objects.set(errors.USER_NOT_FOUND, {error: errors.USER_NOT_FOUND, message: 'User Not Found.'});
err_objects.set(errors.PERMISSION_DENIED, {error: errors.PERMISSION_DENIED, message: 'Permission Denied.'});
err_objects.set(errors.INTERNAL_ERROR, {error: errors.INTERNAL_ERROR, message: 'Internal Error.'});
err_objects.set(errors.UNKNOWN_ERROR, {error: errors.UNKNOWN_ERROR, message: 'Unknown Error.'});

function stringify(code) {
    if (!err_objects.has(code)) {
        return err_objects.get(errors.UNKNOWN_ERROR);
    }
    return err_objects.get(code);
}

module.exports = errors;
module.exports.stringify = stringify;
