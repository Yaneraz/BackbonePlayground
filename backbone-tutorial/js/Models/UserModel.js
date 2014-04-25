myApp.Models.UserModel = Backbone.Model.extend({
    idAttribute: "_id",
    defaults: {
        id: '',
        user: {
            gender: 'male',
            name: {
                title: '',
                first: '',
                last: ''
            },
            location: {
                street: '',
                city: '',
                state: '',
                zip: ''
            },
            email: '',
            password: '',
            md5_hash: '',
            sha1_hash: '',
            phone: '',
            cell: '',
            SSN: ''
        }
    }
});