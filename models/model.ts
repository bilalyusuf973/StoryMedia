import mongoose from 'mongoose';
const { Schema } = mongoose;


const MessageSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    body: String,

}, {timestamps: true});


const PostSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    body: String,
    likedIds: [Schema.Types.ObjectId],

    comments: [MessageSchema],

}, {timestamps: true});


const NotificationSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    body: String,

}, {timestamps: { createdAt: true, updatedAt: false}});


const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        trim: true,
        minLength: [2, 'Name must be larger than 2 characters'],
        maxLength: [30, 'Name must be lesser than 30 characters']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: true,
        trim: true
    },
    bio: String,
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true,
        trim: true
    },
    emailVerified: {
        type: Date,
    },
    image: String,
    coverImage: String,
    profileImage: String,
    hashedPassword: {
        type: String,
        required: [true, 'Password is required!']
    },
    followingIds: [Schema.Types.ObjectId],
    hasNotification: Boolean,

    posts: [PostSchema],
    messages: [MessageSchema],
    notifications: [NotificationSchema],

}, {timestamps: true});


export const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);
export const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);
export const Notification = mongoose.models.Notification || mongoose.model('Notification', NotificationSchema);
export const User = mongoose.models.User || mongoose.model('User', UserSchema);