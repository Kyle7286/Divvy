const { User } = require("../models");

// Defining methods for the booksController
module.exports = {
    findById: async function (req, res) {
        try {
            console.log(req.body);
            const userData = await User.findOne({
                where: { email: req.body.email },
            });

            if (!userData) {
                res
                    .status(400)
                    .json({ message: 'Incorrect email or password, please try again' });
                return;
            }

            const validPassword = await userData.checkPassword(req.body.password);

            if (!validPassword) {
                res
                    .status(400)
                    .json({ message: 'Incorrect email or password, please try again' });
                return;
            }

            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
                
                res.json({ user: userData, message: 'You are now logged in!' });
              });
       
        } catch (err) {
            console.log(err);
            res.status(422).json(err);
        }
    },
}