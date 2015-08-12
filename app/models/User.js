var mongoose = require('mongoose'),
bcrypt = require('bcrypt'),
Schema = mongoose.Schema,
q = require('q');


// previous code was new Schema instead of mongoose.Schema if you'd like to change it

var userSchema = mongoose.Schema({
    local            : {
        email        : String,
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    name: {
        first: {type: String, trim: true, default: '' /*validate: [validateLocalStrategyProperty, 'Please enter your first name']*/},
        last: {type: String, trim: true, default: '' /*validate: [validateLocalStrategyProperty, 'Please enter your last name']*/}
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
    // address: {
    //     type: [addressSchema]
    // },
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
        default: ''
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
        default: ''
        //validate: [validateLocalStrategyPassword, 'Password should be at least 6 characters']
    }
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


// methods ====================== (alternate to the method directly above)
// generating a hash
userSchema.methods.generateHash = function(password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
   return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', userSchema);


