module.exports = {
    platform_values: ['web', 'android', 'ios'],
    settings_value_types: ['array', 'number', 'string', 'boolean', 'date', 'object', 'photo'],
    language_values: ['en', 'ru', 'am'],
    user_role_values: ['user', 'editor', 'moderator', 'admin', 'root'],
    social_providers_values: ['facebook', 'google'],
    upload_destination: './uploads', // TODO: absolute path issues
    image_mimetype_values: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'],
    hash_salt: 'gundapala1mek',
    daytime_values: ['early_morning', 'morning', 'lunch', 'noon', 'evening', 'night'],
    currency_values: ['USD', 'AMD', 'RUR'],
    user_interest_values: ['machine_learning', 'low_level'],
    AccessLevel: {
        OPTIONAL: 1,
        USER: 2,
        EDITOR: 3,
        MODERATOR: 4,
        ADMIN: 5,
        ROOT: 6
    },
    UserRoles: {
        USER: 'user',
        ADMIN: 'admin',
        MODERATOR: 'moderator',
        EDITOR: 'editor',
        ROOT: 'root'
    },
    request_method_values: ['get', 'post', 'put', 'delete'],
    request_methods: {
        GET: 'get',
        POST: 'post',
        PUT: 'put',
        DELETE: 'delete'
    }
};
