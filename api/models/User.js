var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var q = require('q');

var userSchema = new Schema({
    name: {
        first: {type: String, trim: true, default: '', /*validate: [validateLocalStrategyProperty, 'Please enter your first name']*/},
        last: {type: String, trim: true, default: '', /*validate: [validateLocalStrategyProperty, 'Please enter your last name']*/}
    },
    gender: {
        type: String,
        trim: true,
        default: ''
    },
    date_of_birth: {
        type: String,
        trim: true,
        default: ''
    },
    age: {
        type: Number,
        trim: true,
        default: ''
    },
    address: {
        type: [addressSchema]
    },
    nationality: {
        type: String,
        trim: true,
        default: ''
    },
    languages: {
        type: String,
        trim: true,
        default: ''
    },
    interests: {
        type: String,
        trim: true,
        default: ''
    },
    special_needs: {
        type: String,
        trim: true,
        default: ''
    },
    display_name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        default: '',
        //validate: [validateLocalStrategyProperty, 'Please provide your email'],
        //match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    username: {
        type: String,
        //unique: 'Username already exists',
        //required: 'Please enter a username',
        trim: true
    },
    password: {
        type: String,
        default: '',
        //validate: [validateLocalStrategyPassword, 'Password should be at least 6 characters']
    },
});

//pre('save') is mongoose middleware that runs before every user is created
userSchema.pre('save', function(next) {
    var user = this;
    //take password and encrypt it
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            console.log(hash);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.verifyPassword = function(password) {
    var deferred = q.defer();
    var user = this;
    bcrypt.compare(password, user.password, function(err, res) {
        if (err) {
            deferred.resolve(false);
        }
        deferred.resolve(true);
    });
    return deferred.promise;
};

module.exports = mongoose.model('User', userSchema);


