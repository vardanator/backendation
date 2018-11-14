
const AppSettings = {
    users: {
        username_minlength: 4,
        username_maxlength: 50,
        name_minlength: 4,
        name_maxlength: 50,
        email_maxlength: 255,
        password_minlength: 4,
        password_maxlength: 50,
        points_comment: 1,
        points_rate: 1,
        points_subscription: 1,
        points_upload: 1,
        points_follow: 1,
        points_profile_update: 1,
        points_sharing: 1,
        points_like: 1,
        checkin_title_maxlength: 100,
        reserved_usernames: ['ninja', 'www', 'etc', 'code', 'codeninja', 'vardanator', 'artash'],
        default_avatar_url: 'https://cdn21.picsart.com/145116821005201.png',
        default_cover_url: 'https://cdn102.picsart.com/201968254000201.jpg'
    },
    localization: {
        countries: {
            en: ['Armenia', 'Georgia', 'Russia', 'Nagorno-Karabakh'],
            ru: ['Армения', 'Грузия', 'Россия', 'Нагорный Карабах'],
            am: ['Հայաստան', 'Վրաստան', 'Ռուսաստան', 'Լեռնային Ղարաբաղի Հանրապետություն']
        },
        states: {
            en: ['Yerevan', 'Shirak', 'Lori', 'Tbilisi', 'Moscow', 'Kotayk', 'Armavir',
                'Stepanakert', 'Aragatsotn', 'Syunik', 'Tavush', 'Gegharkunik', 'Ararat', 'Vayots Dzor'],
            ru: ['Ереван', 'Ширак', 'Лори', 'Тбилиси', 'Москва', 'Котайк', 'Армавир', 'Степанакерт',
                'Арагацотн', 'Сюник', 'Тавуш', 'Гегаркуник', 'Арарат', 'Вайоц Дзор'],
            am: ['Երևան', 'Շիրակ', 'Լոռի', 'Թբիլիսի', 'Մոսկվա', 'Կոտայք', 'Արմավիր', 'Ստեփանակերտ',
                'Արագածոտն', 'Սյունիք', 'Տավուշ', 'Գեղարքունիք', 'Արարատ', 'Վայոց Ձոր']
        },
        cities: {
            en: ['Yerevan', 'Gyumri', 'Vanadzor', 'Tbilisi', 'Moscow', 'Tsaghkadzor',
                'Abovyan', 'Echmiadzin', 'Stepanakert', 'Verin Ptghni village',
                'Apnagyugh village', 'Kapan', 'Arinj village', 'Jrvezh village',
                'Vagharshapat', 'Armavir', 'Ijevan', 'Hrazdan', 'Martuni', 'Masis', 'Merdzavan',
                'Dilijan', 'Arzakan', 'Dzoraghbyur village', 'Arzakan Village', 'Sevan', 'Geghanist',
                'Parakar community', 'Berd', 'Lenughi village', 'Yeghvard', 'Tairov village',
                'Stepanavan', 'Vedi', 'Zovuni', 'Goris', 'Byureghavan', 'Charentsavan',
                'Vayk', 'Metsamor', 'Ayntap', 'Gavar', 'Artashat', 'Akhalkalaki', 'Ashtarak',
                'Byurakan', 'Jermuk', 'Hankavan', 'Arzni', 'Balahovit', 'Ararat', 'Yeghegnadzor', 'Aparan'],
            ru: ['Ереван', 'Гюмри', 'Ванадзор', 'Тбилиси', 'Москва', 'Цахкадзор', 'Геганист',
                'Абовян', 'Эджмиацин', 'Степанакерт', 'Птгни', 'Апнагюх', 'Мердзаван', 'Капан', 'Горис', 'Апаран',
                'Ариндж', 'Джрвеж', 'Армавир', 'Иджеван', 'Граздан', 'Мартуни', 'Масис', 'Дилиджан', 'Ехегнадзор'],
            am: ['Երևան', 'Գյումրի', 'Վանաձոր', 'Թբիլիսի', 'Մոսկվա', 'Ծաղկաձոր', 'Ապարան',
                'Աբովյան', 'Էջմիածին', 'Ստեփանակերտ', 'Վերին Պտղնի', 'Ափնագյուղ', 'Գեղանիստ',
                'Ղափան', 'Առինջ', 'Ջրվեժ', 'Արմավիր', 'Իջևան', 'Հրազդան', 'Մարտունի',
                'Դիլիջան', 'Մասիս', 'Եղեգնաձոր', 'Գորիս', 'Մերձավան']
        }
    },
    general: {
        url_maxlength: 2084
    },
    queries: {
        offset_min: 0,
        offset_max: 999999999,
        limit_min: 0,
        limit_max: 60,
        users: {
            offset_min: 0,
            offset_max: 999999999,
            limit_min: 0,
            limit_max: 60
        }
    }
};

module.exports = AppSettings;
