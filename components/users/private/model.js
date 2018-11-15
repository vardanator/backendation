const mongoose = require('mongoose');
const keygen = require('keygenerator');
const Schema = mongoose.Schema;

const Validator = require('./../../core/validator.js');
const AppSettings = require('./../../settings/service');
const AppConstants = require('./../../settings/constants');
const GenSettings = AppSettings.general;
const UsersSettings = AppSettings.users;

function generateAPIKey() {
    return (keygen._({ length: 2 }) + '-' + keygen._({ length: 6 })
        + '-' + keygen.number()
        + '-' + keygen._({ length: 6 })
        + '-' + keygen._({ length: 8 })).replace(/&/g, '');
}

let UsersSchema = new Schema({
    key: {
        type: String,
        default: generateAPIKey,
        index: {unique: true}
    },
    username: {
            type: String,
            lowercase: true,
            trim: true,
            minlength: UsersSettings.username_minlength,
            maxlength: UsersSettings.username_maxlength
    },
    password: {
        type: String,
        default: null,
        minlength: UsersSettings.password_minlength,
        maxlength: UsersSettings.password_maxlength
    },
    name: {
        type: String,
        trim: true,
        minlength: UsersSettings.name_minlength,
        maxlength: UsersSettings.name_maxlength
    },
    email: {
        type: String,
        trim: true,
        index: { unique: true, sparse: true },
        lowercase: true,
        maxlength: UsersSettings.email_maxlength,
        validate: Validator.isEmail
    },
    email_confirmed: Boolean,
    phone: {
        type: String,
        minlength: UsersSettings.phone_minlength,
        maxlength: UsersSettings.phone_maxlength
    },
    avatar: {type: Schema.ObjectId, ref: 'photos'},
    cover: {type: Schema.ObjectId, ref: 'photos'},
    gender: Boolean,
    birthday: Date,
    verified: { type: Boolean, default: false },
    points: { type: Number, default: 0 },
    badges: [String],
    role: { type: String, enum: AppConstants.user_roles, default: 'user' },
    social: {
        provider: { type: String, enum: AppConstants.social_providers },
        id: { type: String },
        token: { type: String, default: null, trim: true },
        url: { type: String, default: null, maxlength: GenSettings.url_maxlength, validator: Validator.isURL },
        email: { type: String, default: null, maxlength: UsersSettings.email_maxlength, validator: Validator.isEmail },
        data: {}
    },
    blacklist: { type: Boolean, default: false },
    activity: {
        recent_views: [
            {type: Schema.ObjectId, ref: 'units'}
        ],
        recent_search: [String]
    },
    metadata: {
        created: { type: Date, default: Date.now },
        updated: { type: Date, default: Date.now },
        last_visit: { type: Date, default: Date.now },
        platform: {type: String, enum: AppConstants.platform_values},
        location: {
            ip: { type: String, validator: Validator.isIP },
            city: { type: String, maxlength: GenSettings.city_maxlength },
            country: { type: String, maxlength: GenSettings.country_maxlength },
            latitude: { type: Number, min: -90, max: 90, validator: Validator.isFloat },
            longitude: { type: Number, min: -180, max: 180, validator: Validator.isFloat }
        }
    },
    settings: {
        language: { type: String, enum: AppConstants.language_values, default: 'en' },
        currency: { type: String, enum: AppConstants.currency_values, default: 'AMD' },
        push_notifications: {
            courses: Boolean
        },
        email_notifications: {
            courses: Boolean,
            service_announcements: Boolean
        }
    },
    following: [{
        type: Schema.ObjectId, ref: 'users'
    }],
    followers: [{
        type: Schema.ObjectId, ref: 'users'
    }],
    blocks: [{
        type: Schema.ObjectId, ref: 'users'
    }],
    internal: {
        rank: Number,
        notes: [String] // adding invisible notes from admin
    }
});

module.exports = UsersSchema;
