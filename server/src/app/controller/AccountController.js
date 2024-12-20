const Account = require('../models/Account');

exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await Account.findAll();
        res.json(accounts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProfileAdmin = async(req,res) => {
    try{
        const user = req.user;
        res.json(user); 
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

