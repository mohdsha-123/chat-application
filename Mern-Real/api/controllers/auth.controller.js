import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';


export const signup = (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username ,email ,password: hashedPassword });
    
    try {
        newUser.save();
        res.status(201).json(" User Created successfully ");        
    } catch (error) {
        next(error);
    }
    // async await use karna hai

};